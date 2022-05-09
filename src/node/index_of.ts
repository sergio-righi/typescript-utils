/**
 * It gets the index of the element
 * @param {Element} element - DOM element target
 * @returns {number} index
 */

const indexOf = (element: HTMLElement): number => {
  return element
    ? Array.from(element.parentElement.children).indexOf(element)
    : -1;
};

export { indexOf };
