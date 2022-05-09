/**
 * It generates a random and unique value
 * @returns {string} unique value
 */

const uniqueId = (): string => Math.random().toString(36).slice(2);

export { uniqueId };
