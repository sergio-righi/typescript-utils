/**
 * It checks if the given dates are equal
 * @param {date} a date
 * @param {date} b date
 * @returns {boolean} true if the dates are equal
 */

const compareTo = (a: Date, b: Date): boolean => {
  return !a || !b
    ? false
    : a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() === b.getFullYear();
};

export { compareTo };
