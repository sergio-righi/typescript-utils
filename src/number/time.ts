import { pad } from "../number";
import { isObject } from "../boolean";

/**
 * It converts seconds to days, hours, minutes, seconds
 * @param {number} value time to be converted (in seconds)
 * @returns {any} an object containing the count of days, hours, minutes and seconds or the value itself
 */

const time = (value: number): any => {
  if (value <= 0) return value;
  else {
    const day = Math.floor(value / 86400);
    const hour = Math.floor((value - day * 86400) / 3600);
    const min = Math.floor((value - day * 86400 - hour * 3600) / 60);
    const sec = Math.floor(value - day * 86400 - hour * 3600 - min * 60);
    return day > 0
      ? { day, hour, min, sec }
      : hour > 0
        ? { hour, min, sec }
        : min > 0
          ? { min, sec }
          : { sec };
  }
};

/**
 * It converts seconds to time string (00:00:00)
 * @param {number} value time to be converted (in seconds)
 * @returns {string} an object containing the count of days, hours, minutes and seconds as string
 */

const toTimeString = (value: number): string => {
  const response = time(value);
  if (isObject(response)) {
    const length = Object.keys(response).length;
    const mapped = Object.values(response)
      .map((item) => pad(item))
      .join(":");
    return length === 1 ? "00:" + mapped : mapped;
  }
  return "00:00";
};

export { toTimeString, time };
