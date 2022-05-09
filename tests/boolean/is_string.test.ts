import { isString } from "../../src/boolean/is_string";

describe("> boolean > is string", () => {
  test("missing params", () => {
    // expect(isString()).toEqual(false);
    expect(isString(undefined)).toEqual(false);
    expect(isString(null)).toEqual(false);
  });

  // test("invalid input", () => {
  //   expect(isString(0)).toEqual(false);
  //   expect(isString([])).toEqual(false);
  //   expect(isString(() => { })).toEqual(false);
  //   expect(isString(new Date())).toEqual(false);
  // });

  test("signed values", () => {
    expect(isString("")).toEqual(true);
    expect(isString(" ")).toEqual(true);
    expect(isString("  ")).toEqual(true);
    expect(isString("abcdef")).toEqual(true);
    expect(isString("012345")).toEqual(true);
    expect(isString("12345")).toEqual(false);
  });
});
