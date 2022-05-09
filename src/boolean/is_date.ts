/**
 * It checks if the assigned parameter is a valid date
 * @param {any} value
 */

const isDate = (value: any) => {
  return (
    !!value &&
    !isNaN(value) &&
    Object.prototype.toString.call(value) === "[object Date]"
  );
};

export { isDate };
