import { minmax } from "./minmax";

/**
 * It returns the number if its within the range
 * @param {number} value number to be tested
 * @param {number} min min value
 * @param {number} max max value
 * @returns {number} original number if within the range
 */

const between = (value: number | any, min: number, max: number): number => {
  value = Number.parseFloat(value);
  if (isNaN(value)) return value;
  else {
    [min, max] = minmax(min, max);
    return value < min ? min : value > max ? max : value;
  }
};

export { between };
