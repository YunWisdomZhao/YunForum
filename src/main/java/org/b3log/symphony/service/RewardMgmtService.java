package org.b3log.symphony.service;

import org.b3log.latke.ioc.Inject;
import org.b3log.latke.logging.Level;
import org.b3log.latke.logging.Logger;
import org.b3log.latke.repository.RepositoryException;
import org.b3log.latke.repository.annotation.Transactional;
import org.b3log.latke.service.ServiceException;
import org.b3log.latke.service.annotation.Service;
import org.b3log.symphony.repository.RewardRepository;
import org.json.JSONObject;

/**
 * Reward management service.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.1.0.0, Jun 30, 2015
 * @since 1.3.0
 */
@Service
public class RewardMgmtService {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logger.getLogger(RewardMgmtService.class);

    /**
     * Reward repository.
     */
    @Inject
    private RewardRepository rewardRepository;

    /**
     * Adds a reward with the specified request json object.
     *
     * @param requestJSONObject the specified request json object, for example,      <pre>
     *                                                   {
     *                                                       "senderId"; "",
     *                                                       "dataId": "",
     *                                                       "type": int
     *                                                   }
     *                                                   </pre>
     * @return reward id
     * @throws ServiceException service exception
     */
    @Transactional
    public String addReward(final JSONObject requestJSONObject) throws ServiceException {
        try {
            return rewardRepository.add(requestJSONObject);
        } catch (final RepositoryException e) {
            final String msg = "Adds reward failed";
            LOGGER.log(Level.ERROR, msg, e);

            throw new ServiceException(msg);
        }
    }
}
