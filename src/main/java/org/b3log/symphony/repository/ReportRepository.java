package org.b3log.symphony.repository;

import org.b3log.latke.repository.AbstractRepository;
import org.b3log.latke.repository.annotation.Repository;
import org.b3log.symphony.model.Report;

/**
 * Report repository.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.0.0.0, Jun 25, 2018
 * @since 3.1.0
 */
@Repository
public class ReportRepository extends AbstractRepository {

    /**
     * Public constructor.
     */
    public ReportRepository() {
        super(Report.REPORT);
    }
}
