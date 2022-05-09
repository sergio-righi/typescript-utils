/**
 * It parses a form to pair-value object
 * @param {[Object]} form form array
 * @returns {Object} form oject or {} if there is no values to parse
 */

const parser = (form: any): object => {
  if (!form || typeof form !== "object") return {};
  else {
    return Object.values(form)
      .filter((item: any) => item.name && item.value)
      .map((item: any) => ({ [item.name]: item.value }))
      .reduce((o, item) => Object.assign(o, item), {});
  }
};

export { parser };
