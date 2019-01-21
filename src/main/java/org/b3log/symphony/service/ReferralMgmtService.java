package org.b3log.symphony.service;

import org.b3log.latke.Keys;
import org.b3log.latke.ioc.Inject;
import org.b3log.latke.logging.Level;
import org.b3log.latke.logging.Logger;
import org.b3log.latke.repository.RepositoryException;
import org.b3log.latke.repository.annotation.Transactional;
import org.b3log.latke.service.annotation.Service;
import org.b3log.symphony.model.Referral;
import org.b3log.symphony.repository.ReferralRepository;
import org.json.JSONObject;

/**
 * Referral management service.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.0.0.0, Apr 28, 2016
 * @since 1.4.0
 */
@Service
public class ReferralMgmtService {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logger.getLogger(ReferralMgmtService.class);

    /**
     * Referral repository.
     */
    @Inject
    private ReferralRepository referralRepository;

    /**
     * Adds or updates a referral.
     *
     * @param referral the specified referral
     */
    @Transactional
    public void updateReferral(final JSONObject referral) {
        final String dataId = referral.optString(Referral.REFERRAL_DATA_ID);
        final String ip = referral.optString(Referral.REFERRAL_IP);

        try {
            JSONObject record = referralRepository.getByDataIdAndIP(dataId, ip);
            if (null == record) {
                record = new JSONObject();
                record.put(Referral.REFERRAL_AUTHOR_HAS_POINT, false);
                record.put(Referral.REFERRAL_CLICK, 1);
                record.put(Referral.REFERRAL_DATA_ID, dataId);
                record.put(Referral.REFERRAL_IP, ip);
                record.put(Referral.REFERRAL_TYPE, referral.optInt(Referral.REFERRAL_TYPE));
                record.put(Referral.REFERRAL_USER, referral.optString(Referral.REFERRAL_USER));
                record.put(Referral.REFERRAL_USER_HAS_POINT, false);

                referralRepository.add(record);
            } else {
                final String currentReferralUser = referral.optString(Referral.REFERRAL_USER);
                final String firstReferralUser = record.optString(Referral.REFERRAL_USER);
                if (!currentReferralUser.equals(firstReferralUser)) {
                    return;
                }

                record.put(Referral.REFERRAL_CLICK, record.optInt(Referral.REFERRAL_CLICK) + 1);

                referralRepository.update(record.optString(Keys.OBJECT_ID), record);
            }
        } catch (final RepositoryException e) {
            LOGGER.log(Level.ERROR, "Updates a referral failed", e);
        }
    }
}
