import { between } from "../../src/number/between";

describe("> number > between", () => {
  const defaultOutput: any = null;

  // test("missing params", () => {
  //   expect(between()).toEqual(defaultOutput);
  //   expect(between(undefined)).toEqual(defaultOutput);
  //   expect(between(null)).toEqual(defaultOutput);
  // });

  // test("invalid input", () => {
  //   expect(between("abcdef")).toEqual(defaultOutput);
  //   expect(between([])).toEqual(defaultOutput);
  //   expect(between({})).toEqual(defaultOutput);
  //   expect(between(() => { })).toEqual(defaultOutput);
  // });

  // test("signed values", () => {
  //   expect(between(0)).toEqual(0);
  //   expect(between(1)).toEqual(1);
  //   expect(between(-1)).toEqual(-1);
  // });

  // test("two params", () => {
  //   expect(between(0, 1)).toEqual(1);
  //   expect(between(1, 0)).toEqual(1);
  //   expect(between(-1, 0)).toEqual(0);
  //   expect(between(0, -1)).toEqual(0);
  // });

  test("three params", () => {
    expect(between(0, 1, 2)).toEqual(1);
    expect(between(-1, 0, 1)).toEqual(0);
    expect(between(-1, 1, 0)).toEqual(0);
    expect(between(2, 0, 1)).toEqual(1);
    expect(between(0, -1, 1)).toEqual(0);
  });
});
