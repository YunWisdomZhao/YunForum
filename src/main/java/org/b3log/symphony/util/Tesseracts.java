package org.b3log.symphony.util;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang.StringUtils;
import org.b3log.latke.util.Execs;

import java.io.FileInputStream;
import java.io.IOException;

/**
 * Tesseract-OCR utilities.
 *
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.0.0.2, Nov 28, 2018
 * @since 1.4.0
 */
public final class Tesseracts {

    /**
     * Recognizes a single character from the specified image file path.
     *
     * @param imagePath the specified image file path
     * @return the recognized character
     */
    public static String recognizeCharacter(final String imagePath) {
        Execs.exec("tesseract " + imagePath + " " + imagePath + " -l chi_sim -psm 10", 1000 * 10);

        try {
            return StringUtils.trim(IOUtils.toString(new FileInputStream(imagePath + ".txt"), "UTF-8"));
        } catch (final IOException e) {
            return "";
        }
    }

    /**
     * Private constructor.
     */
    private Tesseracts() {
    }
}
