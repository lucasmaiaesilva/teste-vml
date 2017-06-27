var HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          'presets': ['es2015', 'stage-0']
        },
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)/,
        loaders: ['url', 'img']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/template.html'
    })
  ]
}
