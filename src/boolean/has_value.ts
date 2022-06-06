/**
 * It checks if the string has value
 * @param {string} value string to be tested
 * @returns {boolean} true if the value is valid
 */

const hasValue = (value: string): boolean => !!(value !== null && value !== undefined && value.toString().trim().length > 0)

export { hasValue };
