/**
 * It checks if assigned parameter is an element
 * @param {any} value object to be tested
 * @returns {boolean} true if the element is a valid node
 */

const isElement = (element: any): boolean => element instanceof HTMLElement || element instanceof Element || element instanceof Document;

export { isElement };
