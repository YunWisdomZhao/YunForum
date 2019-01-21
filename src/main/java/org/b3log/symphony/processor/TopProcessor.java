package org.b3log.symphony.processor;

import org.b3log.latke.ioc.Inject;
import org.b3log.latke.servlet.HttpMethod;
import org.b3log.latke.servlet.RequestContext;
import org.b3log.latke.servlet.annotation.After;
import org.b3log.latke.servlet.annotation.Before;
import org.b3log.latke.servlet.annotation.RequestProcessing;
import org.b3log.latke.servlet.annotation.RequestProcessor;
import org.b3log.latke.servlet.renderer.AbstractFreeMarkerRenderer;
import org.b3log.symphony.model.Common;
import org.b3log.symphony.model.UserExt;
import org.b3log.symphony.processor.advice.AnonymousViewCheck;
import org.b3log.symphony.processor.advice.PermissionGrant;
import org.b3log.symphony.processor.advice.stopwatch.StopwatchEndAdvice;
import org.b3log.symphony.processor.advice.stopwatch.StopwatchStartAdvice;
import org.b3log.symphony.service.*;
import org.b3log.symphony.util.Symphonys;
import org.json.JSONObject;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Map;

/**
 * Top ranking list processor.
 * <ul>
 * <li>Shows top (/top), GET</li>
 * <li>Top balance ranking list (/top/balance), GET</li>
 * <li>Top consumption ranking list (/top/consumption), GET</li>
 * <li>Top checkin ranking list (/top/checkin), GET</li>
 * <li>Top link ranking list (/top/link), GET</li>
 * </ul>
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.4.0.0, Aug 21, 2018
 * @since 1.3.0
 */
@RequestProcessor
public class TopProcessor {

    /**
     * Data model service.
     */
    @Inject
    private DataModelService dataModelService;

    /**
     * Pointtransfer query service.
     */
    @Inject
    private PointtransferQueryService pointtransferQueryService;

    /**
     * Activity query service.
     */
    @Inject
    private ActivityQueryService activityQueryService;

    /**
     * User query service.
     */
    @Inject
    private UserQueryService userQueryService;

    /**
     * Link query service.
     */
    @Inject
    private LinkQueryService linkQueryService;

    /**
     * Shows top.
     *
     * @param context the specified context
     */
    @RequestProcessing(value = "/top", method = HttpMethod.GET)
    @Before({StopwatchStartAdvice.class, AnonymousViewCheck.class})
    @After({PermissionGrant.class, StopwatchEndAdvice.class})
    public void showTop(final RequestContext context) {
        final HttpServletRequest request = context.getRequest();
        final HttpServletResponse response = context.getResponse();

        final AbstractFreeMarkerRenderer renderer = new SkinRenderer(request);
        context.setRenderer(renderer);
        renderer.setTemplateName("top/index.ftl");

        final Map<String, Object> dataModel = renderer.getDataModel();
        dataModel.put(Common.SELECTED, Common.TOP);

        dataModelService.fillHeaderAndFooter(request, response, dataModel);
        dataModelService.fillRandomArticles(dataModel);
        dataModelService.fillSideHotArticles(dataModel);
        dataModelService.fillSideTags(dataModel);
        dataModelService.fillLatestCmts(dataModel);
    }

    /**
     * Shows link ranking list.
     *
     * @param context the specified context
     */
    @RequestProcessing(value = "/top/link", method = HttpMethod.GET)
    @Before({StopwatchStartAdvice.class, AnonymousViewCheck.class})
    @After({PermissionGrant.class, StopwatchEndAdvice.class})
    public void showLink(final RequestContext context) {
        final HttpServletRequest request = context.getRequest();
        final HttpServletResponse response = context.getResponse();

        final AbstractFreeMarkerRenderer renderer = new SkinRenderer(request);
        context.setRenderer(renderer);
        renderer.setTemplateName("top/link.ftl");

        final Map<String, Object> dataModel = renderer.getDataModel();
        final List<JSONObject> topLinks = linkQueryService.getTopLink(Symphonys.getInt("topCnt"));
        dataModel.put(Common.TOP_LINKS, topLinks);

        dataModelService.fillHeaderAndFooter(request, response, dataModel);
        dataModelService.fillRandomArticles(dataModel);
        dataModelService.fillSideHotArticles(dataModel);
        dataModelService.fillSideTags(dataModel);
        dataModelService.fillLatestCmts(dataModel);
    }

    /**
     * Shows balance ranking list.
     *
     * @param context the specified context
     */
    @RequestProcessing(value = "/top/balance", method = HttpMethod.GET)
    @Before({StopwatchStartAdvice.class, AnonymousViewCheck.class})
    @After({PermissionGrant.class, StopwatchEndAdvice.class})
    public void showBalance(final RequestContext context) {
        final HttpServletRequest request = context.getRequest();
        final HttpServletResponse response = context.getResponse();

        final AbstractFreeMarkerRenderer renderer = new SkinRenderer(request);
        context.setRenderer(renderer);
        renderer.setTemplateName("top/balance.ftl");

        final Map<String, Object> dataModel = renderer.getDataModel();
        final int avatarViewMode = (int) request.getAttribute(UserExt.USER_AVATAR_VIEW_MODE);
        final List<JSONObject> users = pointtransferQueryService.getTopBalanceUsers(avatarViewMode, Symphonys.getInt("topCnt"));
        dataModel.put(Common.TOP_BALANCE_USERS, users);

        dataModelService.fillHeaderAndFooter(request, response, dataModel);
        dataModelService.fillRandomArticles(dataModel);
        dataModelService.fillSideHotArticles(dataModel);
        dataModelService.fillSideTags(dataModel);
        dataModelService.fillLatestCmts(dataModel);
    }

    /**
     * Shows consumption ranking list.
     *
     * @param context the specified context
     */
    @RequestProcessing(value = "/top/consumption", method = HttpMethod.GET)
    @Before({StopwatchStartAdvice.class, AnonymousViewCheck.class})
    @After({PermissionGrant.class, StopwatchEndAdvice.class})
    public void showConsumption(final RequestContext context) {
        final HttpServletRequest request = context.getRequest();
        final HttpServletResponse response = context.getResponse();

        final AbstractFreeMarkerRenderer renderer = new SkinRenderer(request);
        context.setRenderer(renderer);
        renderer.setTemplateName("top/consumption.ftl");

        final Map<String, Object> dataModel = renderer.getDataModel();
        final int avatarViewMode = (int) request.getAttribute(UserExt.USER_AVATAR_VIEW_MODE);
        final List<JSONObject> users = pointtransferQueryService.getTopConsumptionUsers(avatarViewMode, Symphonys.getInt("topCnt"));
        dataModel.put(Common.TOP_CONSUMPTION_USERS, users);

        dataModelService.fillHeaderAndFooter(request, response, dataModel);
        dataModelService.fillRandomArticles(dataModel);
        dataModelService.fillSideHotArticles(dataModel);
        dataModelService.fillSideTags(dataModel);
        dataModelService.fillLatestCmts(dataModel);
    }

    /**
     * Shows checkin ranking list.
     *
     * @param context the specified context
     */
    @RequestProcessing(value = "/top/checkin", method = HttpMethod.GET)
    @Before({StopwatchStartAdvice.class, AnonymousViewCheck.class})
    @After({PermissionGrant.class, StopwatchEndAdvice.class})
    public void showCheckin(final RequestContext context) {
        final HttpServletRequest request = context.getRequest();
        final HttpServletResponse response = context.getResponse();

        final AbstractFreeMarkerRenderer renderer = new SkinRenderer(request);
        context.setRenderer(renderer);
        renderer.setTemplateName("top/checkin.ftl");

        final Map<String, Object> dataModel = renderer.getDataModel();
        final int avatarViewMode = (int) request.getAttribute(UserExt.USER_AVATAR_VIEW_MODE);
        final List<JSONObject> users = activityQueryService.getTopCheckinUsers(avatarViewMode, Symphonys.getInt("topCnt"));
        dataModel.put(Common.TOP_CHECKIN_USERS, users);

        dataModelService.fillHeaderAndFooter(request, response, dataModel);
        dataModelService.fillRandomArticles(dataModel);
        dataModelService.fillSideHotArticles(dataModel);
        dataModelService.fillSideTags(dataModel);
        dataModelService.fillLatestCmts(dataModel);
    }
}
