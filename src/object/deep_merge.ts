import { isObject } from "../boolean/is_object";

/**
 * Deep merge two objects
 * @param {object} original original object
 * @param {object} params object to be merged
 * @returns {object} merged object
 */

const deepMerge = (original: any, ...params: any): object => {
  if (!params.length) return original;
  const source = params.shift();

  if (isObject(original) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!original[key]) Object.assign(original, { [key]: {} });
        deepMerge(original[key], source[key]);
      } else {
        Object.assign(original, { [key]: source[key] });
      }
    }
  }

  return deepMerge(original, ...params);
};

export { deepMerge };
