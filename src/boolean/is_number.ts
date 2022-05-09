/**
 * It checks if assigned parameter is a number
 * @param {string} value string to be tested
 * @returns {boolean} true if the value is a valid number
 */

const isNumber = (value: any): boolean => !isNaN(Number.parseFloat(value)) && isFinite(Number.parseFloat(value));

export { isNumber };
