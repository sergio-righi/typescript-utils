/**
 * It checks if the given value is an imageF
 * @param {string} value string to be tested
 * @returns {boolean} true if the given value is an image
 */

const isImage = (value: string): boolean => value.match(/[^/]+(apng|gif|jpg|jpeg|jpe|jif|jfif|png|svg|webp)$/) !== null;

export { isImage };
