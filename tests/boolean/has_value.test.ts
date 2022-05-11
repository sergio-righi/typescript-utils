import { hasValue } from "../../src/boolean/has_value";

describe("> boolean > has value", () => {
  // test("missing params", () => {
  //   expect(hasValue()).toEqual(false);
  //   expect(hasValue(undefined)).toEqual(false);
  //   expect(hasValue(null)).toEqual(false);
  // });

  // test("invalid input", () => {
  //   expect(hasValue([])).toEqual(false);
  //   expect(hasValue({})).toEqual(false);
  //   expect(hasValue(() => { })).toEqual(false);
  // });

  test("signed values", () => {
    expect(hasValue("a")).toEqual(true);
    expect(hasValue("")).toEqual(false);
    expect(hasValue(" ")).toEqual(false);
    expect(hasValue("  ")).toEqual(false);
  });
});
