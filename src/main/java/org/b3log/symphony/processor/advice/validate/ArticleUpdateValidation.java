package org.b3log.symphony.processor.advice.validate;

import org.b3log.latke.ioc.Singleton;
import org.b3log.latke.servlet.RequestContext;
import org.b3log.latke.servlet.advice.ProcessAdvice;
import org.b3log.latke.servlet.advice.RequestProcessAdviceException;
import org.json.JSONObject;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

/**
 * Validates for article updating.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.0.0.2, Nov 10, 2018
 * @since 0.2.0
 */
@Singleton
public class ArticleUpdateValidation extends ProcessAdvice {

    @Override
    public void doAdvice(final RequestContext context) throws RequestProcessAdviceException {
        final HttpServletRequest request = context.getRequest();
        final JSONObject requestJSONObject = context.requestJSON();
        ArticleAddValidation.validateArticleFields(request, requestJSONObject);
    }
}
