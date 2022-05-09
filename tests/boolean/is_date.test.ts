import { isDate } from "../../src/boolean/is_date";

describe("> boolean > is date", () => {
  test("missing params", () => {
    // expect(isDate()).toEqual(false);
    expect(isDate(undefined)).toEqual(false);
    expect(isDate(null)).toEqual(false);
  });

  // test("invalid input", () => {
  //   expect(isDate("abcdef")).toEqual(false);
  //   expect(isDate([])).toEqual(false);
  //   expect(isDate({})).toEqual(false);
  //   expect(isDate(() => { })).toEqual(false);
  //   expect(isDate(-1)).toEqual(false);
  // });

  test("signed values", () => {
    expect(isDate(new Date())).toEqual(true);
    expect(isDate(new Date(1317826080))).toEqual(true);
    expect(isDate(new Date("2000-13-05"))).toEqual(false);
  });
});
