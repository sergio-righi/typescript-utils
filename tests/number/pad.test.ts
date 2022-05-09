import { pad } from "../../src/number/pad";

describe("> number > pad", () => {
  const defaultOutput: any = null;

  test("missing params", () => {
    // expect(pad()).toEqual(defaultOutput);
    expect(pad(undefined)).toEqual(defaultOutput);
    expect(pad(null)).toEqual(defaultOutput);
  });

  test("signed values", () => {
    expect(pad(0)).toEqual("00");
    expect(pad(1)).toEqual("01");
    expect(pad(-1)).toEqual("01");
  });

  // test("invalid values", () => {
  //   expect(pad([])).toEqual(defaultOutput);
  //   expect(pad({})).toEqual(defaultOutput);
  //   expect(pad(() => { })).toEqual(defaultOutput);
  // });

  test("size values", () => {
    expect(pad(10, 1)).toEqual("10");
    expect(pad(100, 0)).toEqual("100");
    expect(pad(1000, -1)).toEqual("1000");
    expect(pad(1000, null)).toEqual("1000");
    expect(pad(1000, undefined)).toEqual("1000");
  });

  test("bigger values", () => {
    expect(pad(10)).toEqual("10");
    expect(pad(100)).toEqual("100");
    expect(pad(1000)).toEqual("1000");
    expect(pad(10000)).toEqual("10000");
    expect(pad(100000)).toEqual("100000");
  });

  test("modifed size", () => {
    expect(pad(10, 4)).toEqual("0010");
    expect(pad(100, 6)).toEqual("000100");
    expect(pad(1000, 8)).toEqual("00001000");
    expect(pad(10000, 10)).toEqual("0000010000");
  });
});
