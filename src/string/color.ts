/**
 * It converts an Hex color to a RGB color
 * @param {string} value - Hex color with or without `#`
 * @return {object?} { r: number, g: number, b: number } or undefined if does not match
 */

const toRGB = (value: string): { r: number, g: number, b: number } | undefined => {
  const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);
  return match
    ? {
      r: parseInt(match[1], 16),
      g: parseInt(match[2], 16),
      b: parseInt(match[3], 16),
    }
    : undefined;
};

/**
 * It converts an RGB color to an Hex color
 * @param {string} value RGB color
 * @param {string} prefix default value '#'
 * @return {string} Hex color or the entered value
 */

const toHex = (value: string, prefix: string = "#"): string => {
  const match = value.match(/^(rgb)?\(?(\d+),\s*(\d+),\s*(\d+)\)?$/);
  if (!match) return value;
  else {
    match.splice(0, 2);
    for (let i in match) {
      match[i] = parseInt(match[i], 10).toString(16);
      match[i] = (match[i].length === 1 ? "0" : "") + match[i];
    }
    return `${prefix}${match.join("").toUpperCase()}`;
  }
};

export { toRGB, toHex };
