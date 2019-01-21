package org.b3log.symphony.processor.advice;

import org.b3log.latke.Keys;
import org.b3log.latke.ioc.Inject;
import org.b3log.latke.ioc.Singleton;
import org.b3log.latke.logging.Logger;
import org.b3log.latke.model.User;
import org.b3log.latke.servlet.RequestContext;
import org.b3log.latke.servlet.advice.ProcessAdvice;
import org.b3log.latke.servlet.advice.RequestProcessAdviceException;
import org.b3log.symphony.model.UserExt;
import org.b3log.symphony.service.UserQueryService;
import org.json.JSONObject;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * User block check. Gets user from request attribute named "user".
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.1.3.2, Apr 23, 2017
 * @since 0.2.5
 */
@Singleton
public class UserBlockCheck extends ProcessAdvice {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logger.getLogger(UserBlockCheck.class);

    /**
     * User query service.
     */
    @Inject
    private UserQueryService userQueryService;

    @Override
    public void doAdvice(final RequestContext context) throws RequestProcessAdviceException {
        final HttpServletRequest request = context.getRequest();

        final JSONObject exception = new JSONObject();
        exception.put(Keys.MSG, HttpServletResponse.SC_NOT_FOUND);
        exception.put(Keys.STATUS_CODE, HttpServletResponse.SC_NOT_FOUND);

        final String userName = context.pathVar("userName");
        if (UserExt.NULL_USER_NAME.equals(userName)) {
            exception.put(Keys.MSG, "Nil User [" + userName + ", requestURI=" + request.getRequestURI() + "]");
            throw new RequestProcessAdviceException(exception);
        }

        final JSONObject user = userQueryService.getUserByName(userName);
        if (null == user) {
            exception.put(Keys.MSG, "Not found user [" + userName + ", requestURI=" + request.getRequestURI() + "]");
            throw new RequestProcessAdviceException(exception);
        }

        if (UserExt.USER_STATUS_C_NOT_VERIFIED == user.optInt(UserExt.USER_STATUS)) {
            exception.put(Keys.MSG, "Unverified User [" + userName + ", requestURI=" + request.getRequestURI() + "]");
            throw new RequestProcessAdviceException(exception);
        }

        if (UserExt.USER_STATUS_C_INVALID == user.optInt(UserExt.USER_STATUS)) {
            exception.put(Keys.MSG, "Blocked User [" + userName + ", requestURI=" + request.getRequestURI() + "]");
            throw new RequestProcessAdviceException(exception);
        }

        request.setAttribute(User.USER, user);
    }
}
