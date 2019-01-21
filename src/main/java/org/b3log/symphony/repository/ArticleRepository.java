package org.b3log.symphony.repository;

import org.b3log.latke.Keys;
import org.b3log.latke.ioc.Inject;
import org.b3log.latke.repository.*;
import org.b3log.latke.repository.annotation.Repository;
import org.b3log.symphony.cache.ArticleCache;
import org.b3log.symphony.model.Article;
import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

/**
 * Article repository.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.1.1.6, Aug 27, 2018
 * @since 0.2.0
 */
@Repository
public class ArticleRepository extends AbstractRepository {

    /**
     * Article cache.
     */
    @Inject
    private ArticleCache articleCache;

    /**
     * Public constructor.
     */
    public ArticleRepository() {
        super(Article.ARTICLE);
    }

    @Override
    public void remove(final String id) throws RepositoryException {
        super.remove(id);

        articleCache.removeArticle(id);
    }

    @Override
    public JSONObject get(final String id) throws RepositoryException {
        JSONObject ret = articleCache.getArticle(id);
        if (null != ret) {
            return ret;
        }

        ret = super.get(id);
        if (null == ret) {
            return null;
        }

        articleCache.putArticle(ret);

        return ret;
    }

    @Override
    public void update(final String id, final JSONObject article) throws RepositoryException {
        super.update(id, article);

        article.put(Keys.OBJECT_ID, id);
        articleCache.putArticle(article);
    }

    @Override
    public List<JSONObject> getRandomly(final int fetchSize) throws RepositoryException {
        final List<JSONObject> ret = new ArrayList<>();

        final double mid = Math.random();

        Query query = new Query().setFilter(
                CompositeFilterOperator.and(new PropertyFilter(Article.ARTICLE_RANDOM_DOUBLE, FilterOperator.GREATER_THAN_OR_EQUAL, mid),
                        new PropertyFilter(Article.ARTICLE_RANDOM_DOUBLE, FilterOperator.LESS_THAN_OR_EQUAL, mid),
                        new PropertyFilter(Article.ARTICLE_STATUS, FilterOperator.NOT_EQUAL, Article.ARTICLE_STATUS_C_INVALID),
                        new PropertyFilter(Article.ARTICLE_TYPE, FilterOperator.NOT_EQUAL, Article.ARTICLE_TYPE_C_DISCUSSION))).
                addProjection(Article.ARTICLE_TITLE, String.class).
                addProjection(Article.ARTICLE_PERMALINK, String.class).
                addProjection(Article.ARTICLE_AUTHOR_ID, String.class).
                setCurrentPageNum(1).setPageSize(fetchSize).setPageCount(1);
        final List<JSONObject> list1 = getList(query);
        ret.addAll(list1);

        final int reminingSize = fetchSize - list1.size();
        if (0 != reminingSize) { // Query for remains
            query = new Query().setFilter(
                    CompositeFilterOperator.and(new PropertyFilter(Article.ARTICLE_RANDOM_DOUBLE, FilterOperator.GREATER_THAN_OR_EQUAL, 0D),
                            new PropertyFilter(Article.ARTICLE_RANDOM_DOUBLE, FilterOperator.LESS_THAN_OR_EQUAL, mid),
                            new PropertyFilter(Article.ARTICLE_STATUS, FilterOperator.NOT_EQUAL, Article.ARTICLE_STATUS_C_INVALID),
                            new PropertyFilter(Article.ARTICLE_TYPE, FilterOperator.NOT_EQUAL, Article.ARTICLE_TYPE_C_DISCUSSION))).
                    addProjection(Article.ARTICLE_TITLE, String.class).
                    addProjection(Article.ARTICLE_PERMALINK, String.class).
                    addProjection(Article.ARTICLE_AUTHOR_ID, String.class).
                    setCurrentPageNum(1).setPageSize(reminingSize).setPageCount(1);
            final List<JSONObject> list2 = getList(query);

            ret.addAll(list2);
        }

        return ret;
    }

    public List<JSONObject> getQuestionRandomly(final int fetchSize) throws RepositoryException {

        final List<JSONObject> ret = new ArrayList<>();

        final double mid = Math.random();

        Query query = new Query().setFilter(
                CompositeFilterOperator.and(new PropertyFilter(Article.ARTICLE_RANDOM_DOUBLE, FilterOperator.GREATER_THAN_OR_EQUAL, mid),
                        new PropertyFilter(Article.ARTICLE_RANDOM_DOUBLE, FilterOperator.LESS_THAN_OR_EQUAL, mid),
                        new PropertyFilter(Article.ARTICLE_STATUS, FilterOperator.NOT_EQUAL, Article.ARTICLE_STATUS_C_INVALID),
                        new PropertyFilter(Article.ARTICLE_TYPE, FilterOperator.EQUAL, Article.ARTICLE_TYPE_C_QNA))).
                addProjection(Article.ARTICLE_TITLE, String.class).
                addProjection(Article.ARTICLE_PERMALINK, String.class).
                addProjection(Article.ARTICLE_AUTHOR_ID, String.class).
                addProjection(Article.ARTICLE_CONTENT, String.class).
                setCurrentPageNum(1).setPageSize(fetchSize).setPageCount(1);
        final List<JSONObject> list1 = getList(query);
        ret.addAll(list1);

        final int reminingSize = fetchSize - list1.size();
        if (0 != reminingSize) { // Query for remains
            query = new Query().setFilter(
                    CompositeFilterOperator.and(new PropertyFilter(Article.ARTICLE_RANDOM_DOUBLE, FilterOperator.GREATER_THAN_OR_EQUAL, 0D),
                            new PropertyFilter(Article.ARTICLE_RANDOM_DOUBLE, FilterOperator.LESS_THAN_OR_EQUAL, mid),
                            new PropertyFilter(Article.ARTICLE_STATUS, FilterOperator.NOT_EQUAL, Article.ARTICLE_STATUS_C_INVALID),
                            new PropertyFilter(Article.ARTICLE_TYPE, FilterOperator.EQUAL, Article.ARTICLE_TYPE_C_QNA))).
                    addProjection(Article.ARTICLE_TITLE, String.class).
                    addProjection(Article.ARTICLE_PERMALINK, String.class).
                    addProjection(Article.ARTICLE_AUTHOR_ID, String.class).
                    addProjection(Article.ARTICLE_CONTENT, String.class).
                    setCurrentPageNum(1).setPageSize(reminingSize).setPageCount(1);
            final List<JSONObject> list2 = getList(query);

            ret.addAll(list2);
        }

        return ret;
    }

    public List<JSONObject> getRecruitRandomly(final int fetchSize) throws RepositoryException {

        final List<JSONObject> ret = new ArrayList<>();

        final double mid = Math.random();

        Query query = new Query().setFilter(
                CompositeFilterOperator.and(new PropertyFilter(Article.ARTICLE_RANDOM_DOUBLE, FilterOperator.GREATER_THAN_OR_EQUAL, mid),
                        new PropertyFilter(Article.ARTICLE_RANDOM_DOUBLE, FilterOperator.LESS_THAN_OR_EQUAL, mid),
                        new PropertyFilter(Article.ARTICLE_STATUS, FilterOperator.NOT_EQUAL, Article.ARTICLE_STATUS_C_INVALID),
                        new PropertyFilter(Article.ARTICLE_TYPE, FilterOperator.EQUAL, Article.ARTICLE_TYPE_C_CITY_BROADCAST))).
                addProjection(Article.ARTICLE_TITLE, String.class).
                addProjection(Article.ARTICLE_PERMALINK, String.class).
                addProjection(Article.ARTICLE_AUTHOR_ID, String.class).
                setCurrentPageNum(1).setPageSize(fetchSize).setPageCount(1);
        final List<JSONObject> list1 = getList(query);
        ret.addAll(list1);

        final int reminingSize = fetchSize - list1.size();
        if (0 != reminingSize) { // Query for remains
            query = new Query().setFilter(
                    CompositeFilterOperator.and(new PropertyFilter(Article.ARTICLE_RANDOM_DOUBLE, FilterOperator.GREATER_THAN_OR_EQUAL, 0D),
                            new PropertyFilter(Article.ARTICLE_RANDOM_DOUBLE, FilterOperator.LESS_THAN_OR_EQUAL, mid),
                            new PropertyFilter(Article.ARTICLE_STATUS, FilterOperator.NOT_EQUAL, Article.ARTICLE_STATUS_C_INVALID),
                            new PropertyFilter(Article.ARTICLE_TYPE, FilterOperator.EQUAL, Article.ARTICLE_TYPE_C_CITY_BROADCAST))).
                    addProjection(Article.ARTICLE_TITLE, String.class).
                    addProjection(Article.ARTICLE_PERMALINK, String.class).
                    addProjection(Article.ARTICLE_AUTHOR_ID, String.class).
                    setCurrentPageNum(1).setPageSize(reminingSize).setPageCount(1);
            final List<JSONObject> list2 = getList(query);

            ret.addAll(list2);
        }

        return ret;
    }

    /**
     * Gets an article by the specified article title.
     *
     * @param articleTitle the specified article title
     * @return an article, {@code null} if not found
     * @throws RepositoryException repository exception
     */
    public JSONObject getByTitle(final String articleTitle) throws RepositoryException {
        final Query query = new Query().setFilter(new PropertyFilter(Article.ARTICLE_TITLE,
                FilterOperator.EQUAL, articleTitle)).setPageCount(1);

        final JSONObject result = get(query);
        final JSONArray array = result.optJSONArray(Keys.RESULTS);
        if (0 == array.length()) {
            return null;
        }

        return array.optJSONObject(0);
    }
}
