package org.b3log.symphony.repository;

import org.b3log.latke.repository.AbstractRepository;
import org.b3log.latke.repository.annotation.Repository;
import org.b3log.symphony.model.Operation;

/**
 * Operation repository.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.0.0.0, Nov 19, 2018
 * @since 3.4.4
 */
@Repository
public class OperationRepository extends AbstractRepository {

    /**
     * Public constructor.
     */
    public OperationRepository() {
        super(Operation.OPERATION);
    }
}
