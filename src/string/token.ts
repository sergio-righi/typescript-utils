/** some characters were excluded to prevent misreading in case the token be entered manually */

const zero = "0";
const number = "123456789";
const upper = "ABCDEFGHJKLMNPQRSTUVWXYZ";
const lower = "abcdefghijkmnopqrstuvwxyz";

/**
 *
 * @param {string} dic characteres that will be used to generate the token
 * @param {number} len length of the token
 * @param {boolean} unique flag to control immediate duplicity (default true)
 * @returns {string} generated token
 */
const run = (dic: string, len: number, unique: boolean = true): string => {
  const result: any = [];
  do {
    const index = Math.floor(Math.random() * dic.length + 1);
    const character = dic[index - 1];
    if (unique) {
      if (result[result.length - 1] !== character) {
        result.push(character);
      }
    } else {
      result.push(character);
    }
  } while (result.length !== len);
  return result.join("");
};

/**
 * It generates a token with a determined length with only numbers (0-9)
 * @param {number} len length of the code
 * @returns {string} generated token
 */

const generateCode = (len: number = 6): string => {
  return run(zero + number, len, false);
};

/**
 * It generates a token with a determined length with only letters and numbers excluding zero
 * @param {number} len length of the code
 * @returns {string} generated token
 */

const generateKey = (len = 48) => {
  return run(lower + upper + number, len);
};

export { generateCode, generateKey };
