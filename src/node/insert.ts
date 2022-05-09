/**
 * It inserts element before another
 * @param {Element} element - DOM element target
 * @param {Element} node - element to be inserted
 */

const insertBefore = (element: HTMLElement, node: HTMLElement) => {
  if (element && node) {
    element.parentNode.insertBefore(node, element);
  }
};

/**
 * It inserts element after another
 * @param {Element} element - DOM element target
 * @param {Element} node - element to be inserted
 */

const insertAfter = (element: HTMLElement, node: HTMLElement) => {
  if (element && node) {
    element.parentNode.insertBefore(node, element.nextSibling);
  }
};

export { insertBefore, insertAfter };
