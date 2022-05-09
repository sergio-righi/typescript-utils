/**
 * It checks if the target element has overflow content
 * @param {Element} element - DOM element target
 * @returns {boolean} true if the target element has overflow content
 */

const hasOverflow = (element: Element): boolean => {
  return !element
    ? false
    : element.clientWidth < element.scrollWidth || element.clientHeight < element.scrollHeight;
};

export { hasOverflow };
