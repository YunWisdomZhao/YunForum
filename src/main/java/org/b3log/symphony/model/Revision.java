package org.b3log.symphony.model;

/**
 * This class defines all revision model relevant keys.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.1.0.0, Apr 30, 2017
 * @since 1.4.0
 */
public final class Revision {

    /**
     * Revision.
     */
    public static final String REVISION = "revision";

    /**
     * Revisions.
     */
    public static final String REVISIONS = "revisions";

    /**
     * Key of revision data type.
     */
    public static final String REVISION_DATA_TYPE = "revisionDataType";

    /**
     * Key of revision data id.
     */
    public static final String REVISION_DATA_ID = "revisionDataId";

    /**
     * Key of revision data.
     */
    public static final String REVISION_DATA = "revisionData";

    /**
     * Key of revision author id.
     */
    public static final String REVISION_AUTHOR_ID = "revisionAuthorId";

    // Data type constants
    /**
     * Data type - article.
     */
    public static final int DATA_TYPE_C_ARTICLE = 0;

    /**
     * Data type - comment.
     */
    public static final int DATA_TYPE_C_COMMENT = 1;
}
