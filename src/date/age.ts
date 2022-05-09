/**
 * It convertes date to age value
 * @param {any} value birthday
 * @returns {number} age
 */

const age = (value: Date): number => {
  if (!!value && value instanceof Date) {
    const diff = Math.abs(value.getTime() - new Date().getTime());
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  } else return -1;
};

export { age };
