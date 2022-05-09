/**
 * Simple object check
 * @param {any} value object to be tested
 * @returns {boolean} true if the value is an object but not an array
 */

const isObject = (value: any): boolean => !!value && Object.prototype.toString.call(value) === "[object Object]";

export { isObject };
