/**
 * It checks if the assigned parameter is a regular expression
 * @param {any} value object to be tested
 * @returns {boolean} true if the parameter is a regular expression
 */

const isRegex = (value: any): boolean => value instanceof RegExp;

export { isRegex };
