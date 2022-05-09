import { filesize } from "../../src/string/filesize";

describe("> string > filesize", () => {
  const defaultOutput: any = null;

  test("missing params", () => {
    // expect(filesize()).toEqual(defaultOutput);
    expect(filesize(undefined)).toEqual(defaultOutput);
    expect(filesize(null)).toEqual(defaultOutput);
  });

  // test("invalid input", () => {
  //   expect(filesize("abcdef")).toEqual(defaultOutput);
  //   expect(filesize([])).toEqual(defaultOutput);
  //   expect(filesize({})).toEqual(defaultOutput);
  //   expect(filesize(() => { })).toEqual(defaultOutput);
  // });

  test("signed values", () => {
    expect(filesize(2684354560)).toEqual('2.5gb');
    expect(filesize(3932160)).toEqual('3.75mb');
    expect(filesize(79872)).toEqual('78kb');
    expect(filesize(456)).toEqual('456b');
  });
});
