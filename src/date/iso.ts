/**
 * It converts ISO date string to Date
 * @param {string} value utc string
 * @returns {Date} Date
 */

const fromISO = (value: string): Date => {
  const timestamp = Date.parse(value.slice(1));
  const date = new Date(timestamp);
  date.setTime(date.getTime() + 4 * 60 * 60 * 1000);
  return date;
};

/**
 * It returns the ISO date (YYYY-MM-DDTHH:mm:ss.sssZ or ±YYYYYY-MM-DDTHH:mm:ss.sssZ)
 * @param {Date} value
 * @returns {string} ISO date
 */

const toISO = (value: Date): string => value ? value.toISOString() : "";

export { fromISO, toISO };
