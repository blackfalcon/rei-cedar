const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const componentFolder = `./src/npm_components/${process.env.component}`;


function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  entry: {
    ['cdr-' + process.env.tagName]: resolve('plugin.js'),
  },
  output: {
    path: path.resolve(__dirname, `${componentFolder}/dist`),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: `Cdr${process.env.component}`,
    umdNamedDefine: true,
  },
  plugins: [
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: 'index.ejs',
      tagName: `cdr-${process.env.tagName}`,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
        removeAttributeQuotes: false,
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency',
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve('./static'),
        to: path.resolve(__dirname, `${componentFolder}/static`),
        ignore: ['.*'],
      },
    ]),
  ],
};
