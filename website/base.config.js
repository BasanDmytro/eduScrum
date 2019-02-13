const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const B = 1;
const KB = 1000 * B;

const rootPath = __dirname;

module.exports = {
  entry: ['@babel/polyfill', path.join(rootPath, 'app/index.js')],
  output: {
    path: path.join(rootPath, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: ['babel-loader', 'eslint-loader'],
        include: [path.resolve(rootPath, 'app')],
        exclude: [/node_modules/, path.resolve(rootPath, 'dist') ]
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff',
          }
        },
      },
      // WOFF2 Font
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff',
          }
        }
      },
      // TTF Font
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/octet-stream'
          }
        }
      },
      // EOT Font
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader',
      },
      // SVG Font
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'image/svg+xml',
          }
        }
      },
      {
        test: /\.(?:ico|png|jpg|jpeg)$/,
        loader: 'url-loader'
      },
      {
        test: /\.svg$/,
        loader: 'url-loader'
      },
      {
        test: /\.mp4$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 500 * KB,
              mimetype: 'video/mp4'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: 'html-loader?attrs=[]=video:src'
      }
    ]
  },
  resolve: {
    modules: ['node_modules', path.resolve(rootPath, '')]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    // new webpack.IgnorePlugin(/^\.\/(?!core)\w*$/, /lodash$/),
  ],
  target: 'web'
};
