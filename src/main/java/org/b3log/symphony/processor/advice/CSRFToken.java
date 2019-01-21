package org.b3log.symphony.processor.advice;

import org.b3log.latke.ioc.Singleton;
import org.b3log.latke.logging.Logger;
import org.b3log.latke.servlet.RequestContext;
import org.b3log.latke.servlet.advice.ProcessAdvice;
import org.b3log.latke.servlet.renderer.AbstractResponseRenderer;
import org.b3log.symphony.model.Common;
import org.b3log.symphony.util.Sessions;

import java.util.Map;

/**
 * Fills CSRF token.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.0.0.0, Aug 27, 2015
 * @since 1.3.0
 */
@Singleton
public class CSRFToken extends ProcessAdvice {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logger.getLogger(CSRFToken.class);

    @Override
    public void doAdvice(final RequestContext context) {
        final AbstractResponseRenderer renderer = context.getRenderer();
        if (null != renderer) {
            final Map<String, Object> dataModel = renderer.getRenderDataModel();

            dataModel.put(Common.CSRF_TOKEN, Sessions.getCSRFToken(context.getRequest()));
        }
    }
}
