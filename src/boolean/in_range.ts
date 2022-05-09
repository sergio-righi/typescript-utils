import { minmax } from "../number";

/**
 * It checkes if the assigned value is within the given range (inclusive)
 * @param {number} value - value to be tested
 * @param {number} min min value
 * @param {number} max max value
 * @returns {boolean} true if the number is within the range
 */

const inRange = (value: number, min: number, max: number): boolean => {
  if (isNaN(Number(value))) return false;
  [min, max] = minmax(min, max);
  return min && max
    ? value >= min && value <= max
    : min
      ? value >= min
      : max
        ? value <= max
        : false;
};

export { inRange };
