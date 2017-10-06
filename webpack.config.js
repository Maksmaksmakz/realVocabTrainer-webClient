var path = require('path')
var webpack = require('webpack')

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
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  plugins:[
    new webpack.optimize.UglifyJsPlugin({
      //...
    })
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
