import { isJSON } from "../boolean";
/**
 * It makes JSON string "prettier"
 * @param {string} value JSON to be formatted
 * @param {number} spaces indentation
 * @returns {string} formatted JSON
 */

const formattedJSON = (value: string, spaces: number = 2): string => {
  return isJSON(value) ? JSON.stringify(value, null, spaces) : value;
};

export { formattedJSON };
