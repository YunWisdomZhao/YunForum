package org.b3log.symphony.service;

import org.b3log.latke.Keys;
import org.b3log.latke.ioc.Inject;
import org.b3log.latke.logging.Level;
import org.b3log.latke.logging.Logger;
import org.b3log.latke.repository.*;
import org.b3log.latke.service.annotation.Service;
import org.b3log.symphony.model.Verifycode;
import org.b3log.symphony.repository.VerifycodeRepository;
import org.json.JSONArray;
import org.json.JSONObject;

/**
 * Verifycode query service.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.2.0.1, Jun 13, 2018
 * @since 1.3.0
 */
@Service
public class VerifycodeQueryService {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logger.getLogger(VerifycodeQueryService.class);

    /**
     * Verifycode repository.
     */
    @Inject
    private VerifycodeRepository verifycodeRepository;

    /**
     * Gets a verifycode with the specified type, biz type and user id.
     *
     * @param type    the specified type
     * @param bizType the specified biz type
     * @param userId  the specified user id
     * @return verifycode, returns {@code null} if not found
     */
    public JSONObject getVerifycodeByUserId(final int type, final int bizType, final String userId) {
        final Query query = new Query().setFilter(CompositeFilterOperator.and(
                new PropertyFilter(Verifycode.TYPE, FilterOperator.EQUAL, type),
                new PropertyFilter(Verifycode.BIZ_TYPE, FilterOperator.EQUAL, bizType),
                new PropertyFilter(Verifycode.USER_ID, FilterOperator.EQUAL, userId))
        ).addSort(Keys.OBJECT_ID, SortDirection.DESCENDING);

        try {
            final JSONObject result = verifycodeRepository.get(query);
            final JSONArray codes = result.optJSONArray(Keys.RESULTS);
            if (0 == codes.length()) {
                return null;
            }

            return codes.optJSONObject(0);
        } catch (final Exception e) {
            LOGGER.log(Level.ERROR, "Gets verifycode failed", e);

            return null;
        }
    }

    /**
     * Gets a verifycode with the specified code.
     *
     * @param code the specified code
     * @return verifycode, returns {@code null} if not found
     */
    public JSONObject getVerifycode(final String code) {
        final Query query = new Query().setFilter(new PropertyFilter(Verifycode.CODE, FilterOperator.EQUAL, code));

        try {
            final JSONObject result = verifycodeRepository.get(query);
            final JSONArray codes = result.optJSONArray(Keys.RESULTS);
            if (0 == codes.length()) {
                return null;
            }

            return codes.optJSONObject(0);
        } catch (final Exception e) {
            LOGGER.log(Level.ERROR, "Gets verifycode error", e);

            return null;
        }
    }
}
