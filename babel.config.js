// babel.config.js
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    // [
    //   "env",
    //   {
    //     loose: true,
    //     modules: false,
    //   },
    // ],
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          boolean: "./src/boolean",
          date: "./src/date",
          node: "./src/node",
          number: "./src/number",
          object: "./src/object",
          string: "./src/string",
        },
      },
    ],
  ],
};
