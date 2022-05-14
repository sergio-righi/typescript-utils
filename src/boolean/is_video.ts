/**
 * It checks if the given value is a video
 * @param {string} value string to be tested
 * @returns {boolean} true if the given value is a video
 */

const isVideo = (value: string): boolean => value.match(/[^/]+(mp4|webm|ogg)$/) !== null;

export { isVideo };
