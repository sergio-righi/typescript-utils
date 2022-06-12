import { isURL } from "../../src/boolean/is_url";

describe("> boolean > is url", () => {
  // test("missing params", () => {
  //   expect(isURL()).toEqual(false);
  //   expect(isURL(undefined)).toEqual(false);
  //   expect(isURL(null)).toEqual(false);
  // });

  test("invalid input", () => {
    expect(isURL("www.test")).toEqual(false);
    expect(isURL("www.test-.com")).toEqual(false);
    expect(isURL("www.-test.com")).toEqual(false);
    expect(isURL("test.com")).toEqual(false);
    expect(isURL("http://www.test")).toEqual(false);
    expect(isURL("http://test")).toEqual(false);
    expect(isURL("www.test#.com")).toEqual(false);
    expect(isURL("http://localhost/")).toEqual(false);
  });

  test("signed values", () => {
    expect(isURL("www.test.com")).toEqual(true);
    expect(isURL("http://192.168.1.101/")).toEqual(true);
    expect(isURL("http://192.168.1.101:8080/")).toEqual(true);
    expect(isURL("http://www.test.com")).toEqual(true);
    expect(isURL("https://www.test.com")).toEqual(true);
    expect(isURL("http://localhost:4000/")).toEqual(true);
    expect(isURL("https://www.test.com:8080")).toEqual(true);
    expect(isURL("https://www.test.com?param=")).toEqual(true);
  });
});
