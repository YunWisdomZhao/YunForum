package org.b3log.symphony.service;

import org.b3log.latke.ioc.Inject;
import org.b3log.latke.logging.Level;
import org.b3log.latke.logging.Logger;
import org.b3log.latke.repository.annotation.Transactional;
import org.b3log.latke.service.annotation.Service;
import org.b3log.symphony.repository.OperationRepository;
import org.json.JSONObject;

/**
 * Operation management service.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.0.0.0, Nov 19, 2018
 * @since 3.4.4
 */
@Service
public class OperationMgmtService {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logger.getLogger(OperationMgmtService.class);

    /**
     * Operation repository.
     */
    @Inject
    private OperationRepository operationRepository;

    /**
     * Adds the specified operation.
     *
     * @param operation the specified operation
     */
    @Transactional
    public void addOperation(final JSONObject operation) {
        try {
            operationRepository.add(operation);
        } catch (final Exception e) {
            LOGGER.log(Level.ERROR, "Adds an operation failed", e);
        }
    }
}
