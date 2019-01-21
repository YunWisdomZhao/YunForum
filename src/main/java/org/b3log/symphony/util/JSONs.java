package org.b3log.symphony.util;

import org.b3log.latke.util.CollectionUtils;
import org.json.JSONObject;

import java.util.List;
import java.util.stream.Collectors;

/**
 * JSON utilities.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.1.0.0, Aug 31, 2018
 * @since 1.4.0
 */
public final class JSONs {

    /**
     * Private constructor.
     */
    private JSONs() {
    }

    /**
     * Clones a JSON object from the specified source object.
     *
     * @param src the specified source object
     * @return cloned object
     */
    public static JSONObject clone(final JSONObject src) {
        return new JSONObject(src, CollectionUtils.jsonArrayToArray(src.names(), String[].class));
    }

    /**
     * Clones a JSON object list from the specified source object list.
     *
     * @param src the specified source object list
     * @return cloned object list
     */
    public static List<JSONObject> clone(final List<JSONObject> src) {
        return src.stream().map(JSONs::clone).collect(Collectors.toList());
    }
}
