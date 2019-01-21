package org.b3log.symphony.service;

import org.apache.commons.lang.StringUtils;
import org.b3log.latke.ioc.Inject;
import org.b3log.latke.logging.Level;
import org.b3log.latke.logging.Logger;
import org.b3log.latke.repository.RepositoryException;
import org.b3log.latke.service.annotation.Service;
import org.b3log.symphony.repository.EmotionRepository;

/**
 * Emotion query service.
 *
 * @author <a href="http://zephyr.b3log.org">Zephyr</a>
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.0.0.2, Apr 25, 2017
 * @since 1.5.0
 */
@Service
public class EmotionQueryService {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logger.getLogger(EmotionQueryService.class);

    /**
     * Common used emoji string.
     */
    private static final String COMMON_USED = "smile,flushed,joy,sob,yum,trollface,tada,heart,+1,ok_hand,pray";

    /**
     * Emotion repository.
     */
    @Inject
    private EmotionRepository emotionRepository;

    /**
     * Gets a user's emotion (emoji with type=0).
     *
     * @param userId the specified user id
     * @return emoji string join with {@code ","}, returns a common used emoji string if not found
     */
    public String getEmojis(final String userId) {
        try {
            final String ret = emotionRepository.getUserEmojis(userId);
            if (StringUtils.isBlank(ret)) {
                return COMMON_USED;
            }

            return ret;
        } catch (final RepositoryException e) {
            LOGGER.log(Level.ERROR, e.getMessage());

            return COMMON_USED;
        }
    }
}
