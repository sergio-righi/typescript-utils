import { isURL } from "../../src/boolean/is_url";

describe("> boolean > is url", () => {
  // test("missing params", () => {
  //   expect(isURL()).toEqual(false);
  //   expect(isURL(undefined)).toEqual(false);
  //   expect(isURL(null)).toEqual(false);
  // });

  // test("invalid input", () => {
  //   expect(isURL([])).toEqual(false);
  //   expect(isURL({})).toEqual(false);
  //   expect(isURL(() => { })).toEqual(false);
  //   expect(isURL(-1)).toEqual(false);
  // });

  test("signed values", () => {
    expect(isURL("test.com")).toEqual(true);
    expect(isURL("www.test.com")).toEqual(true);
    expect(isURL("http://www.test.com")).toEqual(true);
    expect(isURL("https://www.test.com")).toEqual(true);
    expect(isURL("https://www.test.com:8080")).toEqual(true);
    expect(isURL("https://www.test.com?param=")).toEqual(true);
  });
});
