package org.b3log.symphony.util;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang.StringUtils;
import org.b3log.latke.logging.Level;
import org.b3log.latke.logging.Logger;
import org.b3log.symphony.model.Common;
import org.json.JSONObject;

import java.net.HttpURLConnection;
import java.net.URL;

/**
 * Geography utilities.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.3.0.1, Sep 1, 2018
 * @since 1.3.0
 */
public final class Geos {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logger.getLogger(Geos.class);

    /**
     * Private constructor.
     */
    private Geos() {
    }

    /**
     * Gets country, province and city of the specified IP.
     *
     * @param ip the specified IP
     * @return address info, for example      <pre>
     * {
     *     "country": "",
     *     "province": "",
     *     "city": ""
     * }
     * </pre>, returns {@code null} if not found
     */
    public static JSONObject getAddress(final String ip) {
        final String ak = Symphonys.get("baidu.lbs.ak");
        if (StringUtils.isBlank(ak) || !Networks.isIPv4(ip)) {
            return null;
        }

        HttpURLConnection conn = null;
        try {
            final URL url = new URL("http://api.map.baidu.com/location/ip?ip=" + ip + "&ak=" + ak);
            conn = (HttpURLConnection) url.openConnection();
            conn.setConnectTimeout(1000);
            conn.setReadTimeout(1000);
            final JSONObject data = new JSONObject(IOUtils.toString(conn.getInputStream(), "UTF-8"));
            if (0 != data.optInt("status")) {
                return getAddressTaobao(ip);
            }

            final String content = data.optString("address");
            final String country = content.split("\\|")[0];
            if (!"CN".equals(country) && !"HK".equals(country) && !"TW".equals(country)) {
                LOGGER.log(Level.WARN, "Found other country via Baidu [" + country + ", " + ip + "]");

                return null;
            }

            final String province = content.split("\\|")[1];
            String city = content.split("\\|")[2];
            if ("None".equals(province) || "None".equals(city)) {
                return getAddressTaobao(ip);
            }

            city = StringUtils.replace(city, "市", "");

            final JSONObject ret = new JSONObject();
            ret.put(Common.COUNTRY, "中国");
            ret.put(Common.PROVINCE, province);
            ret.put(Common.CITY, city);

            return ret;
        } catch (final Exception e) {
            LOGGER.log(Level.ERROR, "Can't get location from Baidu [ip=" + ip + "]", e);

            return getAddressTaobao(ip);
        } finally {
            if (null != conn) {
                try {
                    conn.disconnect();
                } catch (final Exception e) {
                    LOGGER.log(Level.ERROR, "Close HTTP connection error", e);
                }
            }
        }
    }

    /**
     * Gets province, city of the specified IP by Taobao API.
     *
     * @param ip the specified IP
     * @return address info, for example      <pre>
     * {
     *     "province": "",
     *     "city": ""
     * }
     * </pre>, returns {@code null} if not found
     */
    private static JSONObject getAddressTaobao(final String ip) {
        HttpURLConnection conn = null;
        try {
            final URL url = new URL("http://ip.taobao.com/service/getIpInfo.php?ip=" + ip);
            conn = (HttpURLConnection) url.openConnection();
            conn.setConnectTimeout(1000);
            conn.setReadTimeout(1000);
            final JSONObject data = new JSONObject(IOUtils.toString(conn.getInputStream(), "UTF-8"));
            if (0 != data.optInt("code")) {
                return null;
            }

            final String country = data.optString("country");
            final String province = data.optString("region");
            String city = data.optString("city");
            city = StringUtils.replace(city, "市", "");

            final JSONObject ret = new JSONObject();
            ret.put(Common.COUNTRY, country);
            ret.put(Common.PROVINCE, province);
            ret.put(Common.CITY, city);

            return ret;
        } catch (final Exception e) {
            LOGGER.log(Level.ERROR, "Can't get location from Taobao [ip=" + ip + "]", e);

            return null;
        } finally {
            if (null != conn) {
                try {
                    conn.disconnect();
                } catch (final Exception e) {
                    LOGGER.log(Level.ERROR, "Close HTTP connection error", e);
                }
            }
        }
    }
}
