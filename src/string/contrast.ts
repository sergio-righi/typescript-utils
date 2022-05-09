import { toRGB } from "./color";

/**
 * It determines the most appropriate text color for the given background
 * @param {string} value - background color (RGB color string)
 * @param {string} light color when light (default #fff)
 * @param {string} dark color when dark (default #000)
 * @returns {string} the color with the most appropriate contrast
 */

const getContrast = (value: string, light: string = "#fff", dark: string = "#000"): string => {
  const rgb = toRGB(value);
  return !rgb
    ? null
    : 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b < 140
      ? light
      : dark;
};

export { getContrast };
