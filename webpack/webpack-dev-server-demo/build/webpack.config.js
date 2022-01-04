const webpack = require("webpack")
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const DIST_PATH = path.resolve(__dirname, "../dist");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.js"),
  output: {
    path: DIST_PATH,
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: [".js",".jsx"]
  },
  devServer: {
    hot: true,
    port: 8080,
    proxy: {
      '/api':{
          target:'http://localhost:3000',
          changeOrigin:true,
          pathRewrite: {
            '^/api': '/'
          }
      }
  }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      hash: true
    })
  ],
  
}