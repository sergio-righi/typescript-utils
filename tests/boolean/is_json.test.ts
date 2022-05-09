import { isJSON } from "../../src/boolean/is_json";

describe("> boolean > is json", () => {
  test("missing params", () => {
    // expect(isJSON()).toEqual(false);
    expect(isJSON(undefined)).toEqual(false);
    expect(isJSON(null)).toEqual(false);
  });

  // test("invalid input", () => {
  //   expect(isJSON(0)).toEqual(false);
  //   expect(isJSON("abcdef")).toEqual(false);
  //   expect(isJSON([])).toEqual(false);
  //   expect(isJSON(() => { })).toEqual(false);
  //   expect(isJSON(new Date())).toEqual(false);
  // });

  test("signed values", () => {
    expect(isJSON('{}')).toEqual(true);
    expect(isJSON('{"abc":"xyz"}')).toEqual(true); // single quote
    expect(isJSON("{'abc':'xyz'}")).toEqual(false); // double quote
    expect(isJSON("[{}]")).toEqual(true);
    expect(isJSON('[{"abc":"xyz"}]')).toEqual(true); // single quote
    expect(isJSON("[{'abc':'xyz'}]")).toEqual(false); // double quote
  });
});
