// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const isProduction = process.env.NODE_ENV == "production";
const tsconfig = require("./tsconfig.json");

console.log(path.resolve(__dirname, "src/canvas/"));

const config = {
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    })
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".ts", ".js", "..."],
    alias: {
      // Path alias from tsconfig
      ...Object.keys(tsconfig.compilerOptions.paths)
        .map((k) => ({[k.replaceAll("/*", "")]: tsconfig.compilerOptions.paths[k]
          .map(e => e.replace("/*",""))
          .map(e => path.resolve(__dirname, e))[0] }))
        .reduce((s,c) => ({...s,...c}), {})
    }
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
