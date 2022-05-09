import { minmax } from "../../src/number/minmax";

describe("> number > minmax", () => {
  const MIN_VALUE: number = Number.MIN_SAFE_INTEGER;
  const MAX_VALUE: number = Number.MAX_SAFE_INTEGER;
  const defaultOutput: any = [MIN_VALUE, MAX_VALUE];

  // test("missing params", () => {
  //   expect(minmax()).toEqual(defaultOutput);
  //   expect(minmax(undefined)).toEqual(defaultOutput);
  //   expect(minmax(null)).toEqual(defaultOutput);
  // });

  // test("invalid input", () => {
  //   expect(minmax("abcdef")).toEqual(defaultOutput);
  //   expect(minmax([])).toEqual(defaultOutput);
  //   expect(minmax({})).toEqual(defaultOutput);
  //   expect(minmax(() => { })).toEqual(defaultOutput);
  // });

  test("skip params", () => {
    expect(minmax(null, 0)).toEqual([MIN_VALUE, 0]);
    expect(minmax(0, null)).toEqual([0, MAX_VALUE]);
  });

  test("two params", () => {
    expect(minmax(0, 1)).toEqual([0, 1]);
    expect(minmax(1, 0)).toEqual([0, 1]);
    expect(minmax(-1, 0)).toEqual([-1, 0]);
    expect(minmax(-1, -2)).toEqual([-2, -1]);
    expect(minmax(0, -1)).toEqual([-1, 0]);
  });

});
