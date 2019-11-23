const path = require("path");
const entryPath = "";
const entryFile = "app.js";

module.exports = {
  entry: `./${entryPath}/js/${entryFile}`,
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `${entryPath}/build`)
  },
  devServer: {
    contentBase: path.join(__dirname, `${entryPath}`),
    publicPath: "/build/",
    compress: true,
    port: 3001
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          "presets": [
            "@babel/preset-env",
            "@babel/preset-react",
            {
              "plugins": [
                "@babel/plugin-proposal-class-properties"
              ]
            }
          ]
        }
      }
    ]
  }
};