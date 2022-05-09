import { offset } from "./offset";

/**
 * It checks whether the target element is in viewport
 * @param {Element} element DOM element target
 * @returns {boolean} true if the element is in viewport
 */

const inViewport = (element: HTMLElement): boolean => {
  if (!element) return false;
  else {
    const dimension: any = { top: window.pageYOffset, left: window.pageXOffset };

    dimension.right = dimension.left + window.innerWidth;
    dimension.bottom = dimension.top + window.innerHeight;

    const position: any = offset(element);

    position.right = position.left + element.clientWidth;
    position.bottom = position.top + element.clientHeight;

    return !(
      dimension.right < position.left ||
      dimension.left > position.right ||
      dimension.bottom < position.top ||
      dimension.top > position.bottom
    );
  }
};

export { inViewport };
