var path = require('path')
var autoprefixer = require('autoprefixer')
var nested = require('postcss-nested')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')

var paths = {
    appSrc: path.resolve(__dirname, "..", "src"),
    appNodeModules: path.resolve(__dirname, "..", "node_modules"),
    appHtml: path.resolve(__dirname, "..", "index.html"),
    appBuild: path.resolve(__dirname, "..", "build"),
}

module.exports = {
  devtool: 'eval',
  entry: [
    require.resolve('webpack-dev-server/client') + '?/',
    require.resolve('webpack/hot/dev-server'),
    require.resolve('./polyfills'),
    path.join(paths.appSrc, 'index')
  ],
  output: {
    // Next line is not used in dev but WebpackDevServer crashes without it:
    path: paths.appBuild,
    pathinfo: true,
    filename: 'static/js/bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.json'],

  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: paths.appSrc,
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        include: paths.appSrc,
        loader: 'babel',
        query: require('./babel.dev')
      },
      {
        test: /\.css$/,
        include: [paths.appSrc, paths.appNodeModules],
        loader: 'style!css!postcss'
      },
      {
        test: /\.json$/,
        include: [paths.appSrc, paths.appNodeModules],
        loader: 'json'
      },
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)(\?.*)?$/,
        include: [paths.appSrc, paths.appNodeModules],
        loader: 'file',
        query: {
          name: 'static/media/[name].[ext]'
        }
      },
      {
        test: /\.(mp4|webm)(\?.*)?$/,
        include: [paths.appSrc, paths.appNodeModules],
        loader: 'url',
        query: {
          limit: 10000,
          name: 'static/media/[name].[ext]'
        }
      }
    ]
  },
  eslint: {
    useEslintrc: true
  },
  postcss: function() {
    return [autoprefixer, nested]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      favicon: paths.appFavicon,
    }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }),
    // Note: only CSS is currently hot reloaded
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin()
  ]
}
