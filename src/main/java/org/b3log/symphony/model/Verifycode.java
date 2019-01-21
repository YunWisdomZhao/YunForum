package org.b3log.symphony.model;

/**
 * This class defines all verifycode model relevant keys.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.2.0.0, Jun 12, 2018
 * @since 1.3.0
 */
public final class Verifycode {

    /**
     * Verifycode.
     */
    public static final String VERIFYCODE = "verifycode";

    /**
     * Verifycodes.
     */
    public static final String VERIFYCODES = "verifycodes";

    /**
     * Key of user id.
     */
    public static final String USER_ID = "userId";

    /**
     * Key of type.
     */
    public static final String TYPE = "type";

    /**
     * Key of business type.
     */
    public static final String BIZ_TYPE = "bizType";

    /**
     * Key of receiver.
     */
    public static final String RECEIVER = "receiver";

    /**
     * Key of code.
     */
    public static final String CODE = "code";

    /**
     * Key of status.
     */
    public static final String STATUS = "status";

    /**
     * Key of expired.
     */
    public static final String EXPIRED = "expired";

    // Type constants
    /**
     * Type - Email.
     */
    public static final int TYPE_C_EMAIL = 0;

    // Business type constants
    /**
     * Business type - Register.
     */
    public static final int BIZ_TYPE_C_REGISTER = 0;

    /**
     * Business type - Reset password.
     */
    public static final int BIZ_TYPE_C_RESET_PWD = 1;

    /**
     * Business type - Bind email.
     */
    public static final int BIZ_TYPE_C_BIND_EMAIL = 3;

    // Status constants
    /**
     * Status - Unsent.
     */
    public static final int STATUS_C_UNSENT = 0;

    /**
     * Status - Sent.
     */
    public static final int STATUS_C_SENT = 1;

    /**
     * Private constructor.
     */
    private Verifycode() {
    }
}
