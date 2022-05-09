/**
 * It generates ObjectId (mongodb)
 * @param {Math} math
 * @param {DateConstructor} date
 * @param {Function} callback
 * @returns {string}
 */

const objectId = (
  math: Math = Math,
  date: DateConstructor = Date,
  len = 16,
  callback: Function = (value: any) => math.floor(value).toString(len)
): string =>
  callback(date.now() / 1000) +
  " ".repeat(len).replace(/./g, () => callback(math.random() * len));

export { objectId };
