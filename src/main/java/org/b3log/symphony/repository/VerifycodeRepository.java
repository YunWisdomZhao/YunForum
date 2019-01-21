package org.b3log.symphony.repository;

import org.b3log.latke.repository.AbstractRepository;
import org.b3log.latke.repository.annotation.Repository;
import org.b3log.symphony.model.Verifycode;

/**
 * Verifycode repository.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.0.0.0, Jul 3, 2015
 * @since 1.3.0
 */
@Repository
public class VerifycodeRepository extends AbstractRepository {

    /**
     * Public constructor.
     */
    public VerifycodeRepository() {
        super(Verifycode.VERIFYCODE);
    }
}
