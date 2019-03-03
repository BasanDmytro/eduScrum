const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const B = 1;
const KB = 1000 * B;

const rootPath = __dirname;

module.exports = {
  entry: path.join(rootPath, 'app'),
  output: {
    path: path.join(rootPath, '..', 'server', 'public', 'dist'),
    filename: '[chunkhash].js',
    chunkFilename: '[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/, /DropdownConstants/],
        loader: ['babel-loader', 'eslint-loader'],
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
    modules: [path.join(rootPath, 'app'), 'node_modules'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('index.html'),
    }),
    function () {
      this.hooks.done.tap('AggresiveSplittingPlugin', (statsData) => {
        const pathToDist = path.resolve('..', 'server', 'public', 'dist');
        const pathToIndexHtml = path.join(pathToDist, 'index.html');
        const stats = statsData.toJson();
        const html = fs.readFileSync(pathToIndexHtml, 'utf8');
        const filteredAssets = stats.entrypoints.main.assets.filter((item) => item.indexOf('map') === -1);
        if (fs.existsSync(pathToDist)) {
          const jsFiles = fs.readdirSync(pathToDist).filter((file) => {
            return ((file.endsWith('.js') || file.endsWith('.js.map')) && (!filteredAssets.includes(file)));
          });
          jsFiles.forEach((file) => fs.unlinkSync(path.join(pathToDist, file)));
        }
        const scripts = filteredAssets.map((chunk) => {
          return `<script src="${chunk}"></script>`;
        }).join('\n');
        const cleanup = html.replace(/<script(?!\stype).+<\/script>\n/g, '');
        const parts = cleanup.split('</html>');
        const result = parts[0] + '<div id="root"></div>\n' + scripts + '</html>';
        fs.writeFileSync(pathToIndexHtml, result);
      });
    },
  ],
  target: 'web'
};
