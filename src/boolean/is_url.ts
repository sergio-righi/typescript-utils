/**
 * It checks if the assigned value is a valid URL
 * @param {string} value string to be tested
 * @returns {boolean} true if the value is a valid URL
 */

const isURL = (value: string): boolean => {
  const pattern =
    /(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,63}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?/gim;
  return !!pattern.test(value);
};

export { isURL };
