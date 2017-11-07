var path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const prod = process.argv.indexOf('-p') !== -1;

module.exports = {
  context: __dirname,
  entry: "./client/sstify.jsx",
  output: {
    path: path.resolve(__dirname, 'public', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin({
      filename: "styles.css"
    }),
    // new webpack.optimize.UglifyJsPlugin()
  ],
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
