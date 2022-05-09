/**
 * It calculates the outer height of the element
 * @param {Element} element DOM element target
 * @returns {number} height of the element (within margin)
 */

const outerHeight = (element: HTMLElement): number => {
  if (!element) return 0;
  else {
    const style = window.getComputedStyle(element);
    const margin = Number.parseFloat(style.marginTop) + Number.parseFloat(style.marginBottom);
    return Math.ceil(element.offsetHeight + margin);
  }
};

export { outerHeight };
