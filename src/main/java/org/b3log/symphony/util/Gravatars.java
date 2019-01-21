package org.b3log.symphony.util;

import jodd.http.HttpRequest;
import jodd.http.HttpResponse;
import org.apache.commons.lang.RandomStringUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.math.RandomUtils;
import org.b3log.latke.logging.Level;
import org.b3log.latke.logging.Logger;

import javax.servlet.http.HttpServletResponse;

/**
 * Gravatar (http://www.gravatar.com) utilities.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.0.0.0, Feb 12, 2018
 * @since 2.5.0
 */
public final class Gravatars {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logger.getLogger(Gravatars.class);

    /**
     * Styles.
     */
    private static final String[] d = new String[]{"identicon", "monsterid", "wavatar", "retro", "robohash"};

    /**
     * Gets random avatar image byte array data with the specified hash.
     *
     * @param hash the specified hash
     * @return avatar image byte array date, returns {@code null} if failed to get avatar
     */
    public static byte[] getRandomAvatarData(final String hash) {
        try {
            String h = hash;
            if (StringUtils.isBlank(h)) {
                h = RandomStringUtils.randomAlphanumeric(16);
            }

            final HttpResponse response = HttpRequest.get("http://www.gravatar.com/avatar/" + h + "?s=256&d=" + d[RandomUtils.nextInt(d.length)]).
                    connectionTimeout(5000).timeout(5000).send();
            if (HttpServletResponse.SC_OK != response.statusCode()) {
                LOGGER.log(Level.WARN, "Gets avatar data failed [sc=" + response.statusCode() + "]");

                return null;
            }

            return response.bodyBytes();
        } catch (final Exception e) {
            LOGGER.log(Level.ERROR, "Gets avatar data failed", e);

            return null;
        }
    }

    /**
     * Private constructor.
     */
    private Gravatars() {
    }
}
