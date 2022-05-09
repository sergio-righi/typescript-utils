/**
 * It checkes if the assigned date is within the given range
 * @param {date} value date to be tested
 * @param {date} min min date
 * @param {date} max max date
 * @returns {boolean} true if the date is within the range
 */

const inRange = (value: Date, min: Date, max: Date): boolean => {
  if (!value) return false;
  return min && max
    ? value >= min && value <= max
    : min && !max
      ? value >= min
      : !min && max
        ? value <= max
        : false;
};

export { inRange };
