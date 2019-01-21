package org.b3log.symphony.processor.advice.stopwatch;

import org.b3log.latke.service.annotation.Service;
import org.b3log.latke.servlet.RequestContext;
import org.b3log.latke.servlet.advice.ProcessAdvice;
import org.b3log.latke.util.Stopwatchs;

/**
 * Stopwatch start advice for request processors.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.0.0.0, Oct 17, 2012
 * @since 0.2.0
 */
@Service
public class StopwatchStartAdvice extends ProcessAdvice {

    @Override
    public void doAdvice(final RequestContext context) {
        final String requestURI = context.getRequest().getRequestURI();
        Stopwatchs.start("Request URI [" + requestURI + ']');
    }
}
