package org.b3log.symphony.repository;

import org.b3log.latke.repository.AbstractRepository;
import org.b3log.latke.repository.annotation.Repository;
import org.b3log.symphony.model.Invitecode;

/**
 * Invitecode repository.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.0.0.0, Jul 2, 2016
 * @since 1.4.0
 */
@Repository
public class InvitecodeRepository extends AbstractRepository {

    /**
     * Public constructor.
     */
    public InvitecodeRepository() {
        super(Invitecode.INVITECODE);
    }
}
