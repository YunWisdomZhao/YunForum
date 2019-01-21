package org.b3log.symphony.model;

/**
 * This class defines all follow model relevant keys.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.1.0.0, Jun 3, 2015
 * @since 0.2.5
 */
public final class Follow {

    /**
     * Follow.
     */
    public static final String FOLLOW = "follow";

    /**
     * Follows.
     */
    public static final String FOLLOWS = "follows";

    /**
     * Key of follower id.
     */
    public static final String FOLLOWER_ID = "followerId";

    /**
     * Key of following id.
     */
    public static final String FOLLOWING_ID = "followingId";

    /**
     * Key of following type.
     */
    public static final String FOLLOWING_TYPE = "followingType";

    // Following type constants
    /**
     * Following type - user.
     */
    public static final int FOLLOWING_TYPE_C_USER = 0;

    /**
     * Following type - tag.
     */
    public static final int FOLLOWING_TYPE_C_TAG = 1;

    /**
     * Following type - article collect.
     */
    public static final int FOLLOWING_TYPE_C_ARTICLE = 2;

    /**
     * Following type - article watch.
     */
    public static final int FOLLOWING_TYPE_C_ARTICLE_WATCH = 3;

    /**
     * Private constructor.
     */
    private Follow() {
    }
}
