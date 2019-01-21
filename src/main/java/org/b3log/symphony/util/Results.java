package org.b3log.symphony.util;

import org.b3log.latke.Keys;
import org.json.JSONObject;

/**
 * Result utilities.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 2.1.0.1, Jul 16, 2015
 * @since 0.2.0
 */
public final class Results {

    /**
     * Constructs a default (false) result.
     *
     * @return a false result,      <pre>
     * {
     *     "sc": false
     * }
     * </pre>
     */
    public static JSONObject falseResult() {
        return new JSONObject().put(Keys.STATUS_CODE, false);
    }

    /**
     * Constructs a default (true) result.
     *
     * @return a true result,      <pre>
     * {
     *     "sc": true
     * }
     * </pre>
     */
    public static JSONObject trueResult() {
        return new JSONObject().put(Keys.STATUS_CODE, true);
    }

    /**
     * Private constructor.
     */
    private Results() {
    }
}
