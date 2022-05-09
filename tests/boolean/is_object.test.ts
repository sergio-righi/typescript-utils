import { isObject } from "../../src/boolean/is_object";

describe("> boolean > is object", () => {
  test("missing params", () => {
    // expect(isObject()).toEqual(false);
    expect(isObject(undefined)).toEqual(false);
    expect(isObject(null)).toEqual(false);
  });

  // test("invalid input", () => {
  //   expect(isObject(0)).toEqual(false);
  //   expect(isObject("abcdef")).toEqual(false);
  //   expect(isObject([])).toEqual(false);
  //   expect(isObject(() => { })).toEqual(false);
  //   expect(isObject(new Date())).toEqual(false);
  // });

  test("signed values", () => {
    expect(isObject({})).toEqual(true);
    expect(isObject("{}")).toEqual(false);
  });
});
