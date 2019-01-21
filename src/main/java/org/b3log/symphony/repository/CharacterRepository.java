package org.b3log.symphony.repository;

import org.b3log.latke.repository.AbstractRepository;
import org.b3log.latke.repository.annotation.Repository;

/**
 * Character repository.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.0.0.0, Jun 8, 2016
 * @since 1.4.0
 */
@Repository
public class CharacterRepository extends AbstractRepository {

    /**
     * Public constructor.
     */
    public CharacterRepository() {
        super(org.b3log.symphony.model.Character.CHARACTER);
    }
}
