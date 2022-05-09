import { isNumber } from "../../src/boolean/is_number";

describe("> boolean > is number", () => {
  test("missing params", () => {
    // expect(isNumber()).toEqual(false);
    expect(isNumber(undefined)).toEqual(false);
    expect(isNumber(null)).toEqual(false);
  });

  // test("invalid input", () => {
  //   expect(isNumber("abcdef")).toEqual(false);
  //   expect(isNumber({})).toEqual(false);
  //   expect(isNumber([])).toEqual(false);
  //   expect(isNumber(() => { })).toEqual(false);
  //   expect(isNumber(Infinity)).toEqual(false);
  //   expect(isNumber(Number.NaN)).toEqual(false);
  // });

  test("signed values", () => {
    expect(isNumber("0")).toEqual(true);
    expect(isNumber(-1)).toEqual(true);
  });
});
