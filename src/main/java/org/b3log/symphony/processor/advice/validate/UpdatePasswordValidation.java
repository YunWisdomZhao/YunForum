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
import org.json.JSONObject;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

/**
 * Validates for user password update.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.0.0.1, Oct 29, 2012
 * @since 0.2.0
 */
@Singleton
public class UpdatePasswordValidation extends ProcessAdvice {

    /**
     * Language service.
     */
    @Inject
    private LangPropsService langPropsService;

    @Override
    public void doAdvice(final RequestContext context) throws RequestProcessAdviceException {
        final HttpServletRequest request = context.getRequest();

        JSONObject requestJSONObject;
        try {
            requestJSONObject = context.requestJSON();
            request.setAttribute(Keys.REQUEST, requestJSONObject);
        } catch (final Exception e) {
            throw new RequestProcessAdviceException(new JSONObject().put(Keys.MSG, e.getMessage()));
        }

        final String oldPwd = requestJSONObject.optString(User.USER_PASSWORD);
        if (StringUtils.isBlank(oldPwd)) {
            throw new RequestProcessAdviceException(new JSONObject().put(Keys.MSG, langPropsService.get("emptyOldPwdLabel")));
        }

        final String pwd = requestJSONObject.optString(User.USER_PASSWORD);
        if (UserRegisterValidation.invalidUserPassword(pwd)) {
            throw new RequestProcessAdviceException(new JSONObject().put(Keys.MSG, langPropsService.get("invalidPasswordLabel")));
        }
    }
}
