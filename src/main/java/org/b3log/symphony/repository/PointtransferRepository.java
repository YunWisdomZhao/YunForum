package org.b3log.symphony.repository;

import org.b3log.latke.logging.Level;
import org.b3log.latke.logging.Logger;
import org.b3log.latke.repository.AbstractRepository;
import org.b3log.latke.repository.annotation.Repository;
import org.b3log.symphony.model.Common;
import org.b3log.symphony.model.Pointtransfer;
import org.json.JSONObject;

import java.util.List;

/**
 * Pointtransfer repository.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.1.1.0, Dec 12, 2016
 * @since 1.3.0
 */
@Repository
public class PointtransferRepository extends AbstractRepository {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logger.getLogger(PointtransferRepository.class);

    /**
     * Gets average point of activity eating snake of a user specified by the given user id.
     *
     * @param userId the given user id
     * @return average point, if the point small than {@code 1}, returns {@code pointActivityEatingSnake} which
     * configured in sym.properties
     */
    public int getActivityEatingSnakeAvg(final String userId) {
        int ret = Pointtransfer.TRANSFER_SUM_C_ACTIVITY_EATINGSNAKE;

        try {
            final List<JSONObject> result = select("SELECT\n"
                    + "	AVG(sum) AS point\n"
                    + "FROM\n"
                    + "	`" + getName() + "`\n"
                    + "WHERE\n"
                    + "	type = 27\n"
                    + "AND toId = ?\n"
                    + "", userId);
            if (!result.isEmpty()) {
                ret = result.get(0).optInt(Common.POINT, ret);
            }
        } catch (final Exception e) {
            LOGGER.log(Level.ERROR, "Calc avg point failed", e);
        }

        if (ret < 1) {
            ret = Pointtransfer.TRANSFER_SUM_C_ACTIVITY_EATINGSNAKE;
        }

        return ret;
    }

    /**
     * Public constructor.
     */
    public PointtransferRepository() {
        super(Pointtransfer.POINTTRANSFER);
    }
}
