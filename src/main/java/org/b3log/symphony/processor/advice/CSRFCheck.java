package org.b3log.symphony.processor.advice;

import org.apache.commons.lang.StringUtils;
import org.b3log.latke.Keys;
import org.b3log.latke.Latkes;
import org.b3log.latke.ioc.Inject;
import org.b3log.latke.ioc.Singleton;
import org.b3log.latke.logging.Logger;
import org.b3log.latke.service.LangPropsService;
import org.b3log.latke.servlet.RequestContext;
import org.b3log.latke.servlet.advice.ProcessAdvice;
import org.b3log.latke.servlet.advice.RequestProcessAdviceException;
import org.b3log.symphony.model.Common;
import org.b3log.symphony.util.Sessions;
import org.json.JSONObject;

import javax.servlet.http.HttpServletRequest;

/**
 * CSRF check.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.0.1.0, Aug 4, 2018
 * @since 1.3.0
 */
@Singleton
public class CSRFCheck extends ProcessAdvice {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logger.getLogger(CSRFCheck.class);

    /**
     * Language service.
     */
    @Inject
    private LangPropsService langPropsService;

    @Override
    public void doAdvice(final RequestContext context) throws RequestProcessAdviceException {
        final HttpServletRequest request = context.getRequest();

        final JSONObject exception = new JSONObject();
        exception.put(Keys.MSG, langPropsService.get("csrfCheckFailedLabel"));
        exception.put(Keys.STATUS_CODE, false);

        // 1. Check Referer
        final String referer = request.getHeader("Referer");
        if (!StringUtils.startsWith(referer, StringUtils.substringBeforeLast(Latkes.getServePath(), ":"))) {
            throw new RequestProcessAdviceException(exception);
        }

        // 2. Check Token
        final String clientToken = request.getHeader(Common.CSRF_TOKEN);
        final String serverToken = Sessions.getCSRFToken(request);

        if (!StringUtils.equals(clientToken, serverToken)) {
            throw new RequestProcessAdviceException(exception);
        }
    }
}
