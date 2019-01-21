package org.b3log.symphony.model;

/**
 * This class defines all emotion model relevant keys.
 *
 * @author <a href="http://zephyr.b3log.org">Zephyr</a>
 * @version 1.0.0.1, Dec 13, 2016
 * @since 1.5.0
 */
public final class Emotion {

    /**
     * Emotion.
     */
    public static final String EMOTION = "emotion";

    /**
     * Emotions.
     */
    public static final String EMOTIONS = "emotions";

    /**
     * Key of emotion user id.
     */
    public static final String EMOTION_USER_ID = "emotionUserId";

    /**
     * Key of emotion content.
     */
    public static final String EMOTION_CONTENT = "emotionContent";

    /**
     * Key of emotion sort.
     */
    public static final String EMOTION_SORT = "emotionSort";

    /**
     * Key of emotion type.
     */
    public static final String EMOTION_TYPE = "emotionType";

    // Type constants
    /**
     * Emotion type - Emoji.
     */
    public static final int EMOTION_TYPE_C_EMOJI = 0;

    /**
     * Key of a short list of all emojis used in setting.
     */
    public static final String SHORT_T_LIST = "shortLists";

    /**
     * Key of end flag of emoji short list.
     */
    public static final String EOF_EMOJI = "endOfEmoji";

    private Emotion() {
    }
}
