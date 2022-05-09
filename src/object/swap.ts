import { isArrayEmpty } from "../boolean";

/**
 * It swaps two elements inside an array
 * @param {object} elements array
 * @param {number} from index
 * @param {number} to index
 * @returns {object} new array
 */

const swap = (elements: any, from: number, to: number): object => {
  if (!isArrayEmpty(elements)) {
    elements[from] = elements.splice(to, 1, elements[from])[0];
  }
  return elements;
};

export { swap };
