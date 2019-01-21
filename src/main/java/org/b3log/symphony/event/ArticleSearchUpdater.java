package org.b3log.symphony.event;

import org.apache.commons.lang.StringUtils;
import org.b3log.latke.event.AbstractEventListener;
import org.b3log.latke.event.Event;
import org.b3log.latke.ioc.Inject;
import org.b3log.latke.ioc.Singleton;
import org.b3log.latke.logging.Level;
import org.b3log.latke.logging.Logger;
import org.b3log.symphony.model.Article;
import org.b3log.symphony.model.Tag;
import org.b3log.symphony.service.SearchMgmtService;
import org.b3log.symphony.util.JSONs;
import org.b3log.symphony.util.Symphonys;
import org.json.JSONObject;

/**
 * Sends an article to search engine.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.1.3.3, Aug 31, 2018
 * @since 1.4.0
 */
@Singleton
public class ArticleSearchUpdater extends AbstractEventListener<JSONObject> {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logger.getLogger(ArticleSearchUpdater.class);

    /**
     * Search management service.
     */
    @Inject
    private SearchMgmtService searchMgmtService;

    @Override
    public void action(final Event<JSONObject> event) {
        final JSONObject data = event.getData();
        LOGGER.log(Level.TRACE, "Processing an event [type={0}, data={1}]", event.getType(), data);

        final JSONObject article = data.optJSONObject(Article.ARTICLE);
        if (Article.ARTICLE_TYPE_C_DISCUSSION == article.optInt(Article.ARTICLE_TYPE)
                || Article.ARTICLE_TYPE_C_THOUGHT == article.optInt(Article.ARTICLE_TYPE)) {
            return;
        }

        final String tags = article.optString(Article.ARTICLE_TAGS);
        if (StringUtils.containsIgnoreCase(tags, Tag.TAG_TITLE_C_SANDBOX)) {
            return;
        }

        if (Symphonys.getBoolean("algolia.enabled")) {
            searchMgmtService.updateAlgoliaDocument(JSONs.clone(article));
        }

        if (Symphonys.getBoolean("es.enabled")) {
            searchMgmtService.updateESDocument(JSONs.clone(article), Article.ARTICLE);
        }
    }

    /**
     * Gets the event type {@linkplain EventTypes#UPDATE_ARTICLE}.
     *
     * @return event type
     */
    @Override
    public String getEventType() {
        return EventTypes.UPDATE_ARTICLE;
    }
}
