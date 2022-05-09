import { isObject } from "./is_object";
/**
 * It checks if the array is empty
 * @param {any} value array to be tested
 * @returns {boolean} true if the array is empty
 */

const isArrayEmpty = (value: any): boolean => Array.isArray(value) && value.length === 0;

/**
 * It checks if the object is empty
 * @param {any} value object to be tested
 * @returns {boolean} true if the array is empty
 */

const isObjectEmpty = (value: any): boolean => isObject(value) && Object.keys(value).length === 0;

export { isArrayEmpty, isObjectEmpty };
