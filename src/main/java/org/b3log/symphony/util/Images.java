package org.b3log.symphony.util;


import org.apache.commons.lang.StringUtils;

/**
 * Image utilities.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.0.0.1, Nov 4, 2018
 * @since 3.2.0
 */
public final class Images {

    /**
     * Qiniu image processing.
     *
     * @param content the specified article content
     * @return processed content
     */
    public static String qiniuImgProcessing(final String content) {
        String ret = content;

        final boolean qiniuEnabled = Symphonys.getBoolean("qiniu.enabled");
        if (!qiniuEnabled) {
            return ret;
        }

        final String qiniuDomain = Symphonys.get("qiniu.domain");
        final String html = Markdowns.toHTML(content);

        final String[] imgSrcs = StringUtils.substringsBetween(html, "<img src=\"", "\"");
        if (null == imgSrcs) {
            return ret;
        }

        for (final String imgSrc : imgSrcs) {
            if (!StringUtils.startsWith(imgSrc, qiniuDomain) || StringUtils.contains(imgSrc, ".gif")
                    || StringUtils.containsIgnoreCase(imgSrc, "?imageView2")) {
                continue;
            }

            ret = StringUtils.replace(ret, imgSrc, imgSrc + "?imageView2/2/w/768/format/jpg/interlace/0/q");
        }

        return ret;
    }

    /**
     * Private constructor.
     */
    private Images() {
    }
}
