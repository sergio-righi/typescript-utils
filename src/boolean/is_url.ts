/**
 * It checks if the assigned value is a valid URL
 * @param {string} value string to be tested
 * @returns {boolean} true if the value is a valid URL
 */

const isURL = (value: string): boolean => {
  const pattern =
    /((https?:\/\/(?!www))+localhost(:[\d]{2,5})+.*)|(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gim;
  return !!pattern.test(value);
};

export { isURL };
