package org.b3log.symphony.service;

import org.apache.commons.lang.time.DateFormatUtils;
import org.b3log.latke.Keys;
import org.b3log.latke.ioc.Inject;
import org.b3log.latke.logging.Level;
import org.b3log.latke.logging.Logger;
import org.b3log.latke.repository.RepositoryException;
import org.b3log.latke.repository.annotation.Transactional;
import org.b3log.latke.service.annotation.Service;
import org.b3log.latke.util.Stopwatchs;
import org.b3log.symphony.model.Liveness;
import org.b3log.symphony.repository.LivenessRepository;
import org.json.JSONObject;

/**
 * Liveness management service.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.0.0.1, Jun 12, 2018
 * @since 1.4.0
 */
@Service
public class LivenessMgmtService {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logger.getLogger(LivenessMgmtService.class);

    /**
     * Liveness repository.
     */
    @Inject
    private LivenessRepository livenessRepository;

    /**
     * Increments a field of the specified liveness.
     *
     * @param userId the specified user id
     * @param field  the specified field
     */
    @Transactional
    public void incLiveness(final String userId, final String field) {
        Stopwatchs.start("Inc liveness");
        final String date = DateFormatUtils.format(System.currentTimeMillis(), "yyyyMMdd");

        try {
            JSONObject liveness = livenessRepository.getByUserAndDate(userId, date);
            if (null == liveness) {
                liveness = new JSONObject();

                liveness.put(Liveness.LIVENESS_USER_ID, userId);
                liveness.put(Liveness.LIVENESS_DATE, date);
                liveness.put(Liveness.LIVENESS_POINT, 0);
                liveness.put(Liveness.LIVENESS_ACTIVITY, 0);
                liveness.put(Liveness.LIVENESS_ARTICLE, 0);
                liveness.put(Liveness.LIVENESS_COMMENT, 0);
                liveness.put(Liveness.LIVENESS_PV, 0);
                liveness.put(Liveness.LIVENESS_REWARD, 0);
                liveness.put(Liveness.LIVENESS_THANK, 0);
                liveness.put(Liveness.LIVENESS_VOTE, 0);
                liveness.put(Liveness.LIVENESS_VOTE, 0);
                liveness.put(Liveness.LIVENESS_ACCEPT_ANSWER, 0);

                livenessRepository.add(liveness);
            }

            liveness.put(field, liveness.optInt(field) + 1);

            livenessRepository.update(liveness.optString(Keys.OBJECT_ID), liveness);
        } catch (final RepositoryException e) {
            LOGGER.log(Level.ERROR, "Updates a liveness [" + date + "] field [" + field + "] failed", e);
        } finally {
            Stopwatchs.end();
        }
    }
}
