package org.b3log.symphony.model;

/**
 * This class defines all role model relevant keys.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.1.0.2, Dec 14, 2016
 * @since 1.8.0
 */
public final class Role {

    /**
     * Role.
     */
    public static final String ROLE = "role";

    /**
     * Roles.
     */
    public static final String ROLES = "roles";

    /**
     * Key of role name.
     */
    public static final String ROLE_NAME = "roleName";

    /**
     * Key of role description.
     */
    public static final String ROLE_DESCRIPTION = "roleDescription";

    /**
     * Key of role id.
     */
    public static final String ROLE_ID = "roleId";

    //// Transient ////
    /**
     * Key of user count.
     */
    public static final String ROLE_T_USER_COUNT = "roleUserCount";

    // Role name constants
    /**
     * Role name - default.
     */
    public static final String ROLE_ID_C_DEFAULT = "defaultRole";

    /**
     * Role name - admin.
     */
    public static final String ROLE_ID_C_ADMIN = "adminRole";

    /**
     * Role name - leader.
     */
    public static final String ROLE_ID_C_LEADER = "leaderRole";

    /**
     * Role name - regular.
     */
    public static final String ROLE_ID_C_REGULAR = "regularRole";

    /**
     * Role name - member.
     */
    public static final String ROLE_ID_C_MEMBER = "memberRole";

    /**
     * Role name - visitor.
     */
    public static final String ROLE_ID_C_VISITOR = "visitorRole";

    /**
     * Private constructor.
     */
    private Role() {
    }
}
