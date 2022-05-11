/**
 * It returns the timestamp of the date
 * @param {Date} value
 * @returns {number} respective timestamp
 */

const toTimestamp = (value: Date): number => value ? value.getTime() : 0;

export { toTimestamp };
