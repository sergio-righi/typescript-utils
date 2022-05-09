/**
 * It returns a determined property from the given element
 * @param {Element} element DOM element target
 * @param {string} property property name
 * @returns {string} property value
 */

const getProperty = (element: HTMLElement, property: string) => {
  return element
    ? window.getComputedStyle(element).getPropertyValue(property)
    : null;
};

export { getProperty };
