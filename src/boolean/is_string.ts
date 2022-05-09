/**
 * It checks if the assigned parameter is a string
 * @param {any} value value to be tested
 * @returns {boolean} true if value is a string
 */

const isString = (value: any): boolean => {
  return (
    /^0\w*|[^0-9]\s*|^$/gi.test(value) &&
    Object.prototype.toString.call(value) === "[object String]"
  );
};

export { isString };
