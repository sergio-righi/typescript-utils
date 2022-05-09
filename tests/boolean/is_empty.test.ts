import { isArrayEmpty, isObjectEmpty } from "../../src/boolean/is_empty";

describe("> boolean > is empty", () => {
  test("missing params", () => {
    // expect(isArrayEmpty()).toEqual(false);
    expect(isArrayEmpty(undefined)).toEqual(false);
    expect(isArrayEmpty(null)).toEqual(false);
  });

  // test("invalid input", () => {
  //   expect(isArrayEmpty("abcdef")).toEqual(false);
  //   expect(isArrayEmpty({})).toEqual(false);
  //   expect(isArrayEmpty(() => { })).toEqual(false);
  //   expect(isArrayEmpty(-1)).toEqual(false);
  // });

  test("signed values", () => {
    expect(isArrayEmpty([])).toEqual(true);
    expect(isArrayEmpty(["abc"])).toEqual(false);

    expect(isObjectEmpty({})).toEqual(true);
    expect(isObjectEmpty({ abc: "xyz" })).toEqual(false);
  });
});
