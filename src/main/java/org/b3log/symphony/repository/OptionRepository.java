package org.b3log.symphony.repository;

import org.b3log.latke.Keys;
import org.b3log.latke.ioc.Inject;
import org.b3log.latke.repository.AbstractRepository;
import org.b3log.latke.repository.RepositoryException;
import org.b3log.latke.repository.annotation.Repository;
import org.b3log.symphony.cache.OptionCache;
import org.b3log.symphony.model.Option;
import org.json.JSONObject;

/**
 * Option repository.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.2.1.0, Jul 16, 2017
 * @since 0.2.0
 */
@Repository
public class OptionRepository extends AbstractRepository {

    /**
     * Option cache.
     */
    @Inject
    private OptionCache optionCache;

    /**
     * Public constructor.
     */
    public OptionRepository() {
        super(Option.OPTION);
    }

    @Override
    public void remove(final String id) throws RepositoryException {
        super.remove(id);

        optionCache.removeOption(id);
    }

    @Override
    public JSONObject get(final String id) throws RepositoryException {
        JSONObject ret = optionCache.getOption(id);
        if (null != ret) {
            return ret;
        }

        ret = super.get(id);
        if (null == ret) {
            return null;
        }

        optionCache.putOption(ret);

        return ret;
    }

    @Override
    public void update(final String id, final JSONObject option) throws RepositoryException {
        super.update(id, option);

        option.put(Keys.OBJECT_ID, id);
        optionCache.putOption(option);
    }
}
