/**
 * It removes all the accentuation
 * @param {string} value to be replaced
 * @returns {string} formatted value
 */

const normalize = (value: string): string =>
  value
    .toString()
    .toUpperCase()
    .replace(new RegExp("[ÁÀÂÃÄ]", "gi"), "A")
    .replace(new RegExp("[ÉÈÊË]", "gi"), "E")
    .replace(new RegExp("[ÍÌÎÏ]", "gi"), "I")
    .replace(new RegExp("[ÓÒÔÕÖ]", "gi"), "O")
    .replace(new RegExp("[ÚÙÛÜ]", "gi"), "U")
    .replace(new RegExp("[Ç]", "gi"), "C")
    .replace(new RegExp("[Ñ]", "gi"), "N")
    .toLowerCase();

export { normalize };
