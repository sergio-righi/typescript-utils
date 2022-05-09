/**
 * It converts filesize from bytes to gigabytes, megabytes, kilobytes and bytes
 * @param {number} value value to be converted to string
 * @param {number} base default 1024
 * @returns {string} string representation of the filesize
 */

const filesize = (value: number, base: number = 1024): string => {
  if (value === undefined || typeof value !== "number") return null;

  value = value / base;
  if (value > base) {
    value = value / base;
    if (value > base) {
      value = value / base;
      return `${value.toFixed(1)}gb`;
    }
    return `${value.toFixed(2)}mb`;
  }
  return value > 1 ? `${Math.trunc(value)}kb` : `${value * base}b`;
};

export { filesize };
