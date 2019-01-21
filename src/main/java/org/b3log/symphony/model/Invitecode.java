package org.b3log.symphony.model;

/**
 * This class defines all invitecode model relevant keys.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.0.0.1, Aug 26, 2016
 * @since 1.4.0
 */
public final class Invitecode {

    /**
     * Invitecode.
     */
    public static final String INVITECODE = "invitecode";

    /**
     * Invitecodes.
     */
    public static final String INVITECODES = "invitecodes";

    /**
     * Key of code.
     */
    public static final String CODE = "code";

    /**
     * Key of generator id.
     */
    public static final String GENERATOR_ID = "generatorId";

    /**
     * Key of user id.
     */
    public static final String USER_ID = "userId";

    /**
     * Key of use time.
     */
    public static final String USE_TIME = "useTime";

    /**
     * Key of status.
     */
    public static final String STATUS = "status";

    /**
     * Key of memo.
     */
    public static final String MEMO = "memo";

    // Status constants
    /**
     * Status - Used.
     */
    public static final int STATUS_C_USED = 0;

    /**
     * Status - Unused.
     */
    public static final int STATUS_C_UNUSED = 1;

    /**
     * Status - Stop use.
     */
    public static final int STATUS_C_STOPUSE = 2;
}
