/**
 * It manually triggers a determined event
 * @param {Element} element DOM element target
 * @param {string} element event name to be triggered
 * @param {boolean} bubbles optional
 */

const trigger = (element: HTMLElement, eventName: string, bubbles: boolean = false) => {
  if (element) {
    element.dispatchEvent(new Event(eventName, { bubbles: bubbles }));
  }
};

export { trigger };
