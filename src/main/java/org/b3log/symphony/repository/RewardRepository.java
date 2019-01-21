package org.b3log.symphony.repository;

import org.b3log.latke.repository.*;
import org.b3log.latke.repository.annotation.Repository;
import org.b3log.symphony.model.Reward;

/**
 * Reward repository.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.1.0.0, Sep 15, 2018
 * @since 1.3.0
 */
@Repository
public class RewardRepository extends AbstractRepository {

    /**
     * Removes rewards by the specified data id.
     *
     * @param dataId the specified data id
     * @throws RepositoryException repository exception
     */
    public void removeByDataId(final String dataId) throws RepositoryException {
        remove(new Query().setFilter(new PropertyFilter(Reward.DATA_ID, FilterOperator.EQUAL, dataId)).
                setPageCount(1));
    }

    /**
     * Public constructor.
     */
    public RewardRepository() {
        super(Reward.REWARD);
    }
}
