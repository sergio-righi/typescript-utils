/**
 * It converts a string to a Date Object
 * @param {string} value string date
 * @returns {Date} date
 */

const toDateTime = (value: string): Date => {
  if (!!value) return null;
  let day: number;
  let month: number;
  let hour: number = 0;
  let minute: number = 0;
  const values: any = value.split(/[^0-9]/g).filter((el) => el);
  const year: number = values.find((el: any) => el.length === 4);
  day = values.find((el: any) => parseInt(el, 10) > 12 && el !== year);
  if ([2, 5].includes(values.length)) {
    minute = values.pop();
    hour = values.pop();
  }
  if (values.length === 0) {
    return new Date(0, 0, 0, hour, minute);
  } else {
    const index = values.indexOf(year);
    values.splice(index, 1);
    if (day) {
      values.splice(values.indexOf(day), 1);
      month = parseInt(values.pop(), 10) - 1;
    } else {
      day = index === 0 ? values[1] : values[0];
      month = index === 0 ? values[0] : parseInt(values[1], 10) - 1;
    }
    return new Date(year, month, day, hour, minute);
  }
};

export { toDateTime };
