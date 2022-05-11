/**
 * It adds leading zeros
 * @param {number} value number to be filled with leading zeros
 * @param {number} size result length (default 2)
 * @returns {string} value if the leading zeros
 */

const pad = (value: number | any, size: number = 2): string => {
  return !isNaN(Number.parseFloat(value))
    ? "0".repeat(Math.max(0, size - Math.abs(value).toString().length)) +
    Math.abs(value)
    : "";
};

export { pad };
