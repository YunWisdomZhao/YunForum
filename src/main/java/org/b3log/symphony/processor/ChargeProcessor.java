package org.b3log.symphony.processor;

import org.b3log.latke.ioc.Inject;
import org.b3log.latke.logging.Logger;
import org.b3log.latke.servlet.HttpMethod;
import org.b3log.latke.servlet.RequestContext;
import org.b3log.latke.servlet.annotation.After;
import org.b3log.latke.servlet.annotation.Before;
import org.b3log.latke.servlet.annotation.RequestProcessing;
import org.b3log.latke.servlet.annotation.RequestProcessor;
import org.b3log.latke.servlet.renderer.AbstractFreeMarkerRenderer;
import org.b3log.symphony.processor.advice.AnonymousViewCheck;
import org.b3log.symphony.processor.advice.PermissionGrant;
import org.b3log.symphony.processor.advice.stopwatch.StopwatchEndAdvice;
import org.b3log.symphony.processor.advice.stopwatch.StopwatchStartAdvice;
import org.b3log.symphony.service.DataModelService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

/**
 * Charge processor.
 * <ul>
 * <li>Shows point charge (/charge/point), GET</li>
 * </ul>
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.1.0.2, Oct 26, 2016
 * @since 1.3.0
 */
@RequestProcessor
public class ChargeProcessor {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logger.getLogger(ChargeProcessor.class);

    /**
     * Data model service.
     */
    @Inject
    private DataModelService dataModelService;

    /**
     * Shows charge point.
     *
     * @param context the specified context
     */
    @RequestProcessing(value = "/charge/point", method = HttpMethod.GET)
    @Before({StopwatchStartAdvice.class, AnonymousViewCheck.class})
    @After({PermissionGrant.class, StopwatchEndAdvice.class})
    public void showChargePoint(final RequestContext context) {
        final HttpServletRequest request = context.getRequest();
        final HttpServletResponse response = context.getResponse();
        final AbstractFreeMarkerRenderer renderer = new SkinRenderer(request);
        context.setRenderer(renderer);
        renderer.setTemplateName("charge-point.ftl");
        final Map<String, Object> dataModel = renderer.getDataModel();
        dataModelService.fillHeaderAndFooter(request, response, dataModel);
        dataModelService.fillRandomArticles(dataModel);
        dataModelService.fillSideHotArticles(dataModel);
        dataModelService.fillSideTags(dataModel);
        dataModelService.fillLatestCmts(dataModel);
    }
}
