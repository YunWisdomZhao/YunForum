package org.b3log.symphony.cache;

import org.b3log.latke.Keys;
import org.b3log.latke.ioc.Singleton;
import org.b3log.latke.model.User;
import org.b3log.symphony.util.JSONs;
import org.b3log.symphony.util.Sessions;
import org.json.JSONObject;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;

/**
 * User cache.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.1.0.1, Jul 30, 2018
 * @since 1.4.0
 */
@Singleton
public class UserCache {

    /**
     * Id, User.
     */
    private static final Map<String, JSONObject> ID_CACHE = new ConcurrentHashMap<>();

    /**
     * Name, User.
     */
    private static final Map<String, JSONObject> NAME_CACHE = new ConcurrentHashMap<>();

    /**
     * Administrators cache.
     */
    private static final List<JSONObject> ADMINS_CACHE = new CopyOnWriteArrayList<>();

    /**
     * Gets admins.
     *
     * @return admins
     */
    public List<JSONObject> getAdmins() {
        return ADMINS_CACHE;
    }

    /**
     * Puts the specified admins.
     *
     * @param admins the specified admins
     */
    public void putAdmins(final List<JSONObject> admins) {
        ADMINS_CACHE.clear();
        ADMINS_CACHE.addAll(admins);
    }

    /**
     * Gets a user by the specified user id.
     *
     * @param userId the specified user id
     * @return user, returns {@code null} if not found
     */
    public JSONObject getUser(final String userId) {
        final JSONObject user = ID_CACHE.get(userId);
        if (null == user) {
            return null;
        }

        return JSONs.clone(user);
    }

    /**
     * Gets a user by the specified user name.
     *
     * @param userName the specified user name
     * @return user, returns {@code null} if not found
     */
    public JSONObject getUserByName(final String userName) {
        final JSONObject user = NAME_CACHE.get(userName);
        if (null == user) {
            return null;
        }

        return JSONs.clone(user);
    }

    /**
     * Adds or updates the specified user.
     *
     * @param user the specified user
     */
    public void putUser(final JSONObject user) {
        ID_CACHE.put(user.optString(Keys.OBJECT_ID), JSONs.clone(user));
        NAME_CACHE.put(user.optString(User.USER_NAME), JSONs.clone(user));

        Sessions.put(user.optString(Keys.OBJECT_ID), user);
    }

    /**
     * Removes the the specified user.
     *
     * @param user the specified user
     */
    public void removeUser(final JSONObject user) {
        ID_CACHE.remove(user.optString(Keys.OBJECT_ID));
        NAME_CACHE.remove(user.optString(User.USER_NAME));
    }
}
