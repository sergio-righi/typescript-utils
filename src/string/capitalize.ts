/**
 * It capitalizes the given string
 * @param {string} value value to be capitalized
 * @returns {string} captalized value
 */

const toCapitalize = (value: string): string => {
  return value
    .toString()
    .toLowerCase()
    .replace(/\w/, (letter: string) => letter.toUpperCase());
};

export { toCapitalize };
