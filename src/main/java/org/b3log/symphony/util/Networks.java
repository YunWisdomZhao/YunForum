package org.b3log.symphony.util;

import org.apache.commons.lang.StringUtils;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Network utilities.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.0.2.1, Aug 2, 2018
 * @since 1.3.0
 */
public final class Networks {

    /**
     * Is IPv4.
     *
     * @param ip ip
     * @return {@code true} if it is, returns {@code false} otherwise
     */
    public static boolean isIPv4(final String ip) {
        if (StringUtils.isBlank(ip)) {
            return false;
        }

        final String regex = "^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$";
        final Pattern pattern = Pattern.compile(regex);
        final Matcher matcher = pattern.matcher(ip);

        return matcher.matches();
    }

    /**
     * Private constructor.
     */
    private Networks() {
    }
}
