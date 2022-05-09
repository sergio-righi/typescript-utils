const UnminifiedWebpackPlugin = require("unminified-webpack-plugin");

module.exports = {
  mode: "production",
  entry: ["./src/index.ts"],
  output: {
    path: __dirname + "/dist",
    filename: "grater-utils.min.ts",
    library: "grater-utils",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
  plugins: [new UnminifiedWebpackPlugin()],
  optimization: {
    usedExports: false,
  },
};
