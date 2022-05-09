/**
 * It returns the absolute position of the element taking the scroll in considerantion
 * @param {Element} element DOM element target
 * @returns {object} { top: number, left: number }
 */

const offset = (element: HTMLElement): { top?: number, left?: number } => {
  if (!element) return {}
  else {
    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;

    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
};

export { offset };
