package org.b3log.symphony.repository;

import org.apache.commons.codec.digest.DigestUtils;
import org.b3log.latke.Keys;
import org.b3log.latke.logging.Level;
import org.b3log.latke.logging.Logger;
import org.b3log.latke.repository.AbstractRepository;
import org.b3log.latke.repository.FilterOperator;
import org.b3log.latke.repository.PropertyFilter;
import org.b3log.latke.repository.Query;
import org.b3log.latke.repository.annotation.Repository;
import org.b3log.symphony.model.Link;
import org.json.JSONArray;
import org.json.JSONObject;

/**
 * Link repository.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.0.0.1, Oct 1, 2018
 * @since 1.6.0
 */
@Repository
public class LinkRepository extends AbstractRepository {

    /**
     * Logger.
     */
    private static final Logger LOGGER = Logger.getLogger(LinkRepository.class);

    /**
     * Gets a link with the specified address.
     *
     * @param addr the specified address
     * @return a link, returns {@code null} if not found
     */
    public JSONObject getLink(final String addr) {
        final String hash = DigestUtils.sha1Hex(addr);
        final Query query = new Query().setFilter(new PropertyFilter(Link.LINK_ADDR_HASH, FilterOperator.EQUAL, hash)).
                setPageCount(1).setPageSize(1).setCurrentPageNum(1);
        try {
            final JSONObject result = get(query);
            final JSONArray links = result.optJSONArray(Keys.RESULTS);
            if (0 == links.length()) {
                return null;
            }

            return links.optJSONObject(0);
        } catch (final Exception e) {
            LOGGER.log(Level.ERROR, "Gets link by address [addr=" + addr + ", hash=" + hash + "] failed", e);

            return null;
        }
    }

    /**
     * Public constructor.
     */
    public LinkRepository() {
        super(Link.LINK);
    }
}
