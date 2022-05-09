/**
 * It checks if the given values are valid and garantizes that min < max
 * @param {number} min min value
 * @param {number} max max value
 * @returns {array} [min, max]
 */

const minmax = (min: number | any, max: number | any): Array<any> => {
  const hasMin = !isNaN(Number.parseFloat(min));
  const hasMax = !isNaN(Number.parseFloat(max));
  return hasMin && hasMax
    ? [Math.min(min, max), Math.max(min, max)]
    : hasMin && !hasMax
      ? [min, Number.MAX_SAFE_INTEGER]
      : !hasMin && hasMax
        ? [Number.MIN_SAFE_INTEGER, max]
        : [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
};

export { minmax };
