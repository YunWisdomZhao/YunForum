package org.b3log.symphony.repository;

import org.b3log.latke.Keys;
import org.b3log.latke.repository.*;
import org.b3log.latke.repository.annotation.Repository;
import org.b3log.symphony.model.Article;
import org.b3log.symphony.model.Tag;
import org.json.JSONObject;

import java.util.List;

/**
 * Tag-Article relation repository.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.1.0.1, Aug 27, 2018
 * @since 0.2.0
 */
@Repository
public class TagArticleRepository extends AbstractRepository {

    /**
     * Public constructor.
     */
    public TagArticleRepository() {
        super(Tag.TAG + "_" + Article.ARTICLE);
    }

    /**
     * Removes tag-articles relations by the specified article id.
     *
     * @param articleId the specified article id
     * @throws RepositoryException repository exception
     */
    public void removeByArticleId(final String articleId) throws RepositoryException {
        final List<JSONObject> relations = getByArticleId(articleId);
        for (final JSONObject relation : relations) {
            remove(relation.optString(Keys.OBJECT_ID));
        }
    }

    /**
     * Gets tag-article relations by the specified article id.
     *
     * @param articleId the specified article id
     * @return for example      <pre>
     * [{
     *         "oId": "",
     *         "tag_oId": "",
     *         "article_oId": articleId
     * }, ....], returns an empty list if not found
     * </pre>
     * @throws RepositoryException repository exception
     */
    public List<JSONObject> getByArticleId(final String articleId) throws RepositoryException {
        final Query query = new Query().setFilter(
                new PropertyFilter(Article.ARTICLE + "_" + Keys.OBJECT_ID, FilterOperator.EQUAL, articleId)).
                setPageCount(1);

        return getList(query);
    }

    /**
     * Gets tag-article relations by the specified tag id.
     *
     * @param tagId          the specified tag id
     * @param currentPageNum the specified current page number, MUST greater then {@code 0}
     * @param pageSize       the specified page size(count of a page contains objects), MUST greater then {@code 0}
     * @return for example      <pre>
     * {
     *     "pagination": {
     *       "paginationPageCount": 88250
     *     },
     *     "rslts": [{
     *         "oId": "",
     *         "tag_oId": tagId,
     *         "article_oId": ""
     *     }, ....]
     * }
     * </pre>
     * @throws RepositoryException repository exception
     */
    public JSONObject getByTagId(final String tagId, final int currentPageNum, final int pageSize)
            throws RepositoryException {
        final Query query = new Query().setFilter(
                new PropertyFilter(Tag.TAG + "_" + Keys.OBJECT_ID, FilterOperator.EQUAL, tagId)).
                addSort(Article.ARTICLE + "_" + Keys.OBJECT_ID, SortDirection.DESCENDING).
                setCurrentPageNum(currentPageNum).
                setPageSize(pageSize).
                setPageCount(1);

        return get(query);
    }
}
