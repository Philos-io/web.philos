var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry:'./app/index',
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.css$/, loaders: ['css', 'style'] }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devServer:{
    contentBase: './public'
  }
};
