/**
 * It checks if the given value is a valid JSON
 * @param {string} value value to be tested
 * @returns {boolean} true if the value is a valid JSON
 */

const isJSON = (value: string): boolean => {
  try {
    return !!value && !!JSON.parse(value);
  } catch (e) {
    return false;
  }
};

export { isJSON };
