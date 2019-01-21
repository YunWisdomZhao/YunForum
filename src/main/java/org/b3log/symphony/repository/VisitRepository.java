package org.b3log.symphony.repository;

import org.b3log.latke.repository.AbstractRepository;
import org.b3log.latke.repository.annotation.Repository;
import org.b3log.symphony.model.Visit;

/**
 * Visit repository.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.0.0.0, Jul 27, 2018
 * @since 3.2.0
 */
@Repository
public class VisitRepository extends AbstractRepository {

    /**
     * Public constructor.
     */
    public VisitRepository() {
        super(Visit.VISIT);
    }
}
