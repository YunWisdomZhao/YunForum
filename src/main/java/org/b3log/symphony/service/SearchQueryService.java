package org.b3log.symphony.service;

import jodd.http.HttpRequest;
import jodd.http.HttpResponse;
import org.b3log.latke.logging.Level;
import org.b3log.latke.logging.Logger;
import org.b3log.latke.service.annotation.Service;
import org.b3log.latke.util.URLs;
import org.b3log.symphony.util.Symphonys;
import org.json.JSONObject;

/**
 * Search query service.
 * <p>
 * Uses <a href="https://www.elastic.co/products/elasticsearch">Elasticsearch</a> as the underlying engine. Uses
 * <a href="https://www.algolia.com">Algolia</a> as the underlying engine.
 * </p>
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @author <a href="http://zephyr.b3log.org">Zephyr</a>
 * @version 1.2.1.3, Aug 2, 2018
 * @since 1.4.0
 */
@Service
public class SearchQueryService {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logger.getLogger(SearchQueryService.class);

    /**
     * Searches by Elasticsearch.
     *
     * @param type        the specified document type
     * @param keyword     the specified keyword
     * @param currentPage the specified current page number
     * @param pageSize    the specified page size
     * @return search result, returns {@code null} if not found
     */
    public JSONObject searchElasticsearch(final String type, final String keyword, final int currentPage, final int pageSize) {
        try {
//            final JSONObject reqData = new JSONObject();
//            final JSONObject q = new JSONObject();
//            final JSONObject and = new JSONObject();
//            q.put("and", and);
//            final JSONArray query = new JSONArray();
//            and.put("query", query);
//            final JSONObject or = new JSONObject();
//            query.put(or);
//            final JSONArray orClause = new JSONArray();
//            or.put("or", orClause);
//
//            final JSONObject content = new JSONObject();
//            content.put(Article.ARTICLE_CONTENT, keyword);
//            final JSONObject matchContent = new JSONObject();
//            matchContent.put("match", content);
//            orClause.put(matchContent);
//
//            final JSONObject title = new JSONObject();
//            title.put(Article.ARTICLE_TITLE, keyword);
//            final JSONObject matchTitle = new JSONObject();
//            matchTitle.put("match", title);
//            orClause.put(matchTitle);
//
//            reqData.put("query", q);
//            reqData.put("from", currentPage);
//            reqData.put("size", pageSize);
//            final JSONArray sort = new JSONArray();
//            final JSONObject sortField = new JSONObject();
//            sort.put(sortField);
//            sortField.put(Article.ARTICLE_CREATE_TIME, "desc");
//            sort.put("_score");
//            reqData.put("sort", sort);
//
//            final JSONObject highlight = new JSONObject();
//            reqData.put("highlight", highlight);
//            highlight.put("number_of_fragments", 3);
//            highlight.put("fragment_size", 150);
//            final JSONObject fields = new JSONObject();
//            highlight.put("fields", fields);
//            final JSONObject contentField = new JSONObject();
//            fields.put(Article.ARTICLE_CONTENT, contentField);
//
//            final JSONArray filter = new JSONArray();
//            and.put("filter", filter);
//            final JSONObject term = new JSONObject();
//            filter.put(term);
//            final JSONObject field = new JSONObject();
//            term.put("term", field);
//            field.put(Article.ARTICLE_STATUS, Article.ARTICLE_STATUS_C_VALID);
//
//            LOGGER.debug(reqData.toString(4));

            final String searchUrl = new StringBuffer(SearchMgmtService.ES_SERVER ).append("/").append(SearchMgmtService.ES_INDEX_NAME).append("/").append(type).append("/_search?q=articleTitle:").append(keyword).append("%20-artcileContent:").append(keyword).toString();
            final HttpResponse response = HttpRequest.get(searchUrl).contentTypeJson().timeout(30000).send();
            response.charset("UTF-8");
            return new JSONObject(response.bodyText());
        } catch (final Exception e) {
            LOGGER.log(Level.ERROR, "Queries failed", e);

            return null;
        }
    }

    /**
     * Searches by Algolia.
     *
     * @param keyword     the specified keyword
     * @param currentPage the specified current page number
     * @param pageSize    the specified page size
     * @return search result, returns {@code null} if not found
     */
    public JSONObject searchAlgolia(final String keyword, final int currentPage, final int pageSize) {
        final int maxRetries = 3;
        int retries = 1;

        final String appId = Symphonys.get("algolia.appId");
        final String index = Symphonys.get("algolia.index");
        final String key = Symphonys.get("algolia.adminKey");

        while (retries <= maxRetries) {
            String host = appId + "-" + retries + ".algolianet.com";

            try {
                final JSONObject params = new JSONObject();
                params.put("params", "query=" + URLs.encode(keyword)
                        + "&getRankingInfo=1&facets=*&attributesToRetrieve=*&highlightPreTag=%3Cem%3E"
                        + "&highlightPostTag=%3C%2Fem%3E"
                        + "&facetFilters=%5B%5D&maxValuesPerFacet=100"
                        + "&hitsPerPage=" + pageSize + "&page=" + (currentPage - 1));
                final HttpResponse response = HttpRequest.post("https://" + host + "/1/indexes/" + index + "/query").
                        header("X-Algolia-API-Key", key).
                        header("X-Algolia-Application-Id", appId).bodyText(params.toString()).contentTypeJson().
                        connectionTimeout(5000).timeout(5000).send();
                response.charset("UTF-8");
                final JSONObject ret = new JSONObject(response.bodyText());
                if (200 != response.statusCode()) {
                    LOGGER.warn(ret.toString(4));

                    return null;
                }

                return ret;
            } catch (final Exception e) {
                LOGGER.log(Level.WARN, "Queries failed", e);

                retries++;
                if (retries > maxRetries) {
                    LOGGER.log(Level.ERROR, "Queries failed", e);
                }
            }
        }

        return null;
    }
}
