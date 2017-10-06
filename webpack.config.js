var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath:"/dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use:["css-loader"]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins:[
    new webpack.optimize.UglifyJsPlugin({
      //...
    }),
    new ExtractTextPlugin("main.css")
  ],
  stats: {
    colors: true
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, ""),
    port: 7000
  }
};
