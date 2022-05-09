/**
 * It walks the tree to find the element based on the given selector or itself
 * @param {Element} element DOM root element
 * @param {string} selector DOM selector
 * @param {boolean} all (default false)
 * @returns {Element} element that matches the selector and if all is true, it might returns more than one element
 */

const find = (element: HTMLElement, selector: string, all: boolean = false): any => {
  return element
    ? element.matches(selector)
      ? element
      : all
        ? element.querySelectorAll(selector)
        : element.querySelector(selector) || element
    : null;
};

/**
 * It moves backwards on the tree throught the parent nodes
 * @param {Element} element DOM root element
 * @param {string} selector DOM selector
 * @returns {Element} if finds an element which matches the selector, otherwise returns null
 */

const closest = (element: HTMLElement, selector: string): Element => {
  return matches(
    element,
    selector,
    (elm: HTMLElement) => elm.parentElement || elm.parentNode
  );
};

/**
 * It moves forward on the tree throught the sibling elements
 * @param {Element} element DOM root element
 * @param {string} selector DOM selector
 * @returns {Element} if finds an element which matches the selector, otherwise returns null
 */

const forward = (element: HTMLElement, selector: string): Element => {
  return matches(element, selector, (elm: HTMLElement) => elm.nextElementSibling);
};

/**
 * It moves backward on the tree throught the sibling elements
 * @param {Element} element DOM root element
 * @param {string} selector DOM selector
 * @returns {Element} if finds an element which matches the selector, otherwise returns null
 */

const backward = (element: HTMLElement, selector: string): HTMLElement => {
  return matches(element, selector, (elm: HTMLElement) => elm.previousElementSibling);
};

/**
 * It searchs for elements that matches the given selector (recursively)
 * @param {Element} element DOM root element
 * @param {string} selector DOM selector
 * @returns {Element} if finds an element which matches the selector, otherwise returns null
 */

const matches = (element: HTMLElement, selector: string, walk?: Function): HTMLElement => {
  if (!element) return null;
  else {
    if (element.matches(selector)) return element;
    else if (element !== document.body && walk) {
      element = walk(element);
      return element.matches(selector) ? element : matches(element, selector);
    }
  }
};

export { find, closest, forward, backward, matches };
