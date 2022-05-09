/**
 * It generates a random value (integer) between min and max
 * @param {number} min min value (default MIN_SAFE_INTEGER)
 * @param {number} max max value (default MAX_SAFE_INTEGER)
 * @returns {number} random value
 */

const random = (
  min: number = Number.MIN_SAFE_INTEGER,
  max: number = Number.MAX_SAFE_INTEGER
): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * It generates a random value (decimal) between min and max
 * @param {number} min min value (default MIN_VALUE)
 * @param {number} max max value (default MAX_VALUE)
 * @returns {number} random value
 */

const randomDecimal = (min: number = Number.MIN_VALUE, max: number = Number.MAX_VALUE): number => {
  return Math.random() * (max - min) + min;
};

export { random, randomDecimal };
