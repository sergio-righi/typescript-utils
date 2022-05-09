/**
 * It returns the timestamp of the date
 * @param {Date} value
 * @returns {number} respective timestamp
 */

const toTimestamp = (value: Date): number => value instanceof Date ? value.getTime() : null;

export { toTimestamp };
