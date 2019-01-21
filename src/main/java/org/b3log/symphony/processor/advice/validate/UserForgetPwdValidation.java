package org.b3log.symphony.processor.advice.validate;

import org.b3log.latke.Keys;
import org.b3log.latke.ioc.Inject;
import org.b3log.latke.ioc.Singleton;
import org.b3log.latke.model.User;
import org.b3log.latke.service.LangPropsService;
import org.b3log.latke.servlet.RequestContext;
import org.b3log.latke.servlet.advice.ProcessAdvice;
import org.b3log.latke.servlet.advice.RequestProcessAdviceException;
import org.b3log.latke.util.Strings;
import org.b3log.symphony.processor.CaptchaProcessor;
import org.json.JSONObject;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

/**
 * User forget password form validation.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.0.1.0, Mar 10, 2016
 * @since 1.4.0
 */
@Singleton
public class UserForgetPwdValidation extends ProcessAdvice {

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

        final String email = requestJSONObject.optString(User.USER_EMAIL);
        final String captcha = requestJSONObject.optString(CaptchaProcessor.CAPTCHA);

        checkField(CaptchaProcessor.invalidCaptcha(captcha), "submitFailedLabel", "captchaErrorLabel");
        checkField(!Strings.isEmail(email), "submitFailedLabel", "invalidEmailLabel");
    }

    /**
     * Checks field.
     *
     * @param invalid    the specified invalid flag
     * @param failLabel  the specified fail label
     * @param fieldLabel the specified field label
     * @throws RequestProcessAdviceException request process advice exception
     */
    private void checkField(final boolean invalid, final String failLabel, final String fieldLabel)
            throws RequestProcessAdviceException {
        if (invalid) {
            throw new RequestProcessAdviceException(new JSONObject().put(Keys.MSG, langPropsService.get(failLabel)
                    + " - " + langPropsService.get(fieldLabel)));
        }
    }
}
