package org.b3log.symphony.model;

/**
 * This class defines all reward model relevant keys.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.3.0.0, Jun 11, 2018
 * @since 0.2.5
 */
public final class Reward {

    /**
     * Reward.
     */
    public static final String REWARD = "reward";

    /**
     * Rewards.
     */
    public static final String REWARDS = "rewards";

    /**
     * Key of sender id.
     */
    public static final String SENDER_ID = "senderId";

    /**
     * Key of data id.
     */
    public static final String DATA_ID = "dataId";

    /**
     * Key of type.
     */
    public static final String TYPE = "type";

    // Reward type constants
    /**
     * Reward type - reward article.
     */
    public static final int TYPE_C_ARTICLE = 0;

    /**
     * Reward type - comment (thank comment).
     */
    public static final int TYPE_C_COMMENT = 1;

    /**
     * Reward type - user.
     */
    public static final int TYPE_C_USER = 2;

    /**
     * Reward type - thank article.
     */
    public static final int TYPE_C_THANK_ARTICLE = 3;

    /**
     * Reward type - accept comment.
     */
    public static final int TYPE_C_ACCEPT_COMMENT = 4;

    /**
     * Private constructor.
     */
    private Reward() {
    }
}
