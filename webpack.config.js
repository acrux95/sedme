const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    calendar: "./src/views/calendar/calendar.js"
    // contacto: path.resolve(__dirname, "src", "javascripts", "contacto"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },
  resolve: {
    extensions: [".js"],
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      { 
        test: /\.pug$/,
        use: {
          loader:"pug-loader"
        }
      },
      { 
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/views/calendar/calendar.pug',
      filename: "./calendar.html",
    }),
    new HtmlWebpackPlugin({
      template: './index.pug',
      filename: "./index.html",
    }),
    // new HtmlWebpackPlugin({
    //   inject: true,
    //   template: "./src/pug/index.html",
    //   filename: "./index.html",
    // }),
    // new CopyWebpackPlugin({
    //   patterns: [{ from: "./src/css/main.css", to: "" }],
    // }),
  ],
};
