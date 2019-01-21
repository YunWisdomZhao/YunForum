package org.b3log.symphony.cache;

import org.b3log.latke.Keys;
import org.b3log.latke.cache.Cache;
import org.b3log.latke.cache.CacheFactory;
import org.b3log.latke.ioc.Singleton;
import org.b3log.symphony.model.Option;
import org.b3log.symphony.util.JSONs;
import org.json.JSONObject;

/**
 * Option cache.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.0.0.1, Oct 25, 2016
 * @since 1.5.0
 */
@Singleton
public class OptionCache {

    /**
     * Option cache.
     */
    private static final Cache CACHE = CacheFactory.getCache(Option.OPTIONS);

    static {
        CACHE.setMaxCount(1024);
    }

    /**
     * Gets an option by the specified option id.
     *
     * @param id the specified option id
     * @return option, returns {@code null} if not found
     */
    public JSONObject getOption(final String id) {
        final JSONObject option = CACHE.get(id);
        if (null == option) {
            return null;
        }

        return JSONs.clone(option);
    }

    /**
     * Adds or updates the specified option.
     *
     * @param option the specified option
     */
    public void putOption(final JSONObject option) {
        CACHE.put(option.optString(Keys.OBJECT_ID), JSONs.clone(option));
    }

    /**
     * Removes an option by the specified option id.
     *
     * @param id the specified option id
     */
    public void removeOption(final String id) {
        CACHE.remove(id);
    }
}
