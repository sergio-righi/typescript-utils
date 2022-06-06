/**
 * It checks if the target element has scrollbar content considering css properties
 * @param {Element} element DOM target element
 * @returns {boolean} true if the element has scrollbar
 */

const hasScrollbar = (element: Element): boolean => {
  if (!element) return false;
  const overflowY = window.getComputedStyle(element, null)[<any>"overflow-y"];
  const overflowX = window.getComputedStyle(element, null)[<any>"overflow-x"];
  return (
    ((overflowY === "scroll" || overflowY === "auto") &&
      element.scrollHeight > element.clientHeight) ||
    ((overflowX === "scroll" || overflowX === "auto") &&
      element.scrollWidth > element.clientWidth)
  );
};

export { hasScrollbar };
