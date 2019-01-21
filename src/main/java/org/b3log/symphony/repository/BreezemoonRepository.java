package org.b3log.symphony.repository;

import org.b3log.latke.repository.AbstractRepository;
import org.b3log.latke.repository.annotation.Repository;
import org.b3log.symphony.model.Breezemoon;

/**
 * Breezemoon repository.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.0.0.0, May 21, 2018
 * @since 2.8.0
 */
@Repository
public class BreezemoonRepository extends AbstractRepository {

    /**
     * Public constructor.
     */
    public BreezemoonRepository() {
        super(Breezemoon.BREEZEMOON);
    }
}
