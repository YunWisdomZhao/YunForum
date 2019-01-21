package org.b3log.symphony.processor.advice.validate;

import org.apache.commons.lang.StringUtils;
import org.b3log.latke.Keys;
import org.b3log.latke.ioc.Inject;
import org.b3log.latke.ioc.Singleton;
import org.b3log.latke.model.User;
import org.b3log.latke.service.LangPropsService;
import org.b3log.latke.servlet.RequestContext;
import org.b3log.latke.servlet.advice.ProcessAdvice;
import org.b3log.latke.servlet.advice.RequestProcessAdviceException;
import org.b3log.symphony.model.Common;
import org.b3log.symphony.model.Role;
import org.b3log.symphony.model.UserExt;
import org.b3log.symphony.service.OptionQueryService;
import org.b3log.symphony.service.UserQueryService;
import org.b3log.symphony.util.Symphonys;
import org.json.JSONObject;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

/**
 * Validates for chat message adding.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.0.0.2, Jun 2, 2018
 * @since 1.4.0
 */
@Singleton
public class ChatMsgAddValidation extends ProcessAdvice {

    /**
     * Language service.
     */
    @Inject
    private LangPropsService langPropsService;

    /**
     * Option query service.
     */
    @Inject
    private OptionQueryService optionQueryService;

    /**
     * User query service.
     */
    @Inject
    private UserQueryService userQueryService;

    /**
     * Max content length.
     */
    public static final int MAX_CONTENT_LENGTH = 2000;

    @Override
    public void doAdvice(final RequestContext context) throws RequestProcessAdviceException {
        final HttpServletRequest request = context.getRequest();

        JSONObject requestJSONObject;
        try {
            requestJSONObject = context.requestJSON();
            request.setAttribute(Keys.REQUEST, requestJSONObject);

            final JSONObject currentUser = (JSONObject) request.getAttribute(Common.CURRENT_USER);
            if (System.currentTimeMillis() - currentUser.optLong(UserExt.USER_LATEST_CMT_TIME) < Symphonys.getLong("minStepChatTime")
                    && !Role.ROLE_ID_C_ADMIN.equals(currentUser.optString(User.USER_ROLE))) {
                throw new Exception(langPropsService.get("tooFrequentCmtLabel"));
            }
        } catch (final Exception e) {
            throw new RequestProcessAdviceException(new JSONObject().put(Keys.MSG, e.getMessage()));
        }

        String content = requestJSONObject.optString(Common.CONTENT);
        content = StringUtils.trim(content);
        if (StringUtils.isBlank(content) || content.length() > MAX_CONTENT_LENGTH) {
            throw new RequestProcessAdviceException(new JSONObject().put(Keys.MSG, langPropsService.get("commentErrorLabel")));
        }

        if (optionQueryService.containReservedWord(content)) {
            throw new RequestProcessAdviceException(new JSONObject().put(Keys.MSG, langPropsService.get("contentContainReservedWordLabel")));
        }

        requestJSONObject.put(Common.CONTENT, content);
    }
}
