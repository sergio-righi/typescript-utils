/**
 * It interpolates a string and its given parameters
 * @param {any} params spread parameters to interpolate
 * @returns {string} string with interpoled values or null if values are empty
 */

const format = (...params: any): string => {
  if (params.length === 0) return null;
  return params[0]
    .toString()
    .replace(/{(\d+)}/g, (match: any, i: any) => params[Number(i) + 1] || match);
};

/**
 * It interpolates a string and its given parameters (named)
 * @param {string} value string to be interpolated
 * @param {object} params object with the keys to be interpolated
 * @returns {string} string with interpoled values
 */

const formatNamed = (value: string, params: any): string => {
  return value.replace(/{([^{}]*)}/g, (match, key) => params[key] || match);
};

export { format, formatNamed };
