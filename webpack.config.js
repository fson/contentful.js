var webpack = require('webpack')
module.exports = {
  context: __dirname,
  entry: './browser',
  output: {
    path: __dirname + '/browser-dist',
    filename: 'contentful.js',
    library: 'contentful'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components|dist)/,
        loader: 'babel'
      },
      {
        test: /\.json?$/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/\.\/vendor-node\/axios/g, './vendor-browser/axios.js')
  ]
}
