const path = require("path");
const htmWebpackPlugin = require("html-webpack-plugin");
require("babel-register");

module.exports = {
  entry: ["@babel/polyfill", "src/main.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new htmWebpackPlugin({
      template: "./index.html",
    }),
  ],
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    open: true,
    contentBase: "./dist",
  },
};
