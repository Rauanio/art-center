const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const globule = require('globule');
const { DefinePlugin } = require('webpack');
const fs = require('fs');
const path = require('path');

let mode = 'development';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

const mixins = globule
  .find([
    'src/blocks/components/**/_*.pug',
    '!src/blocks/components/_components.pug',
  ])
  .map((path) => path.split('/').pop())
  .reduce((acc, currentItem) => acc + `include ${currentItem}\n`, ``);

fs.writeFile('src/blocks/components/_components.pug', mixins, (err) => {
  if (err) throw err;
  console.log('Mixins are generated automatically!');
});

function loadJSONFiles(dir) {
  const files = fs.readdirSync(dir);
  const jsonData = {};

  files.forEach((file) => {
    if (file.endsWith('.json')) {
      const filePath = path.resolve(dir, file);
      const fileName = path.basename(file, '.json');
      try {
        jsonData[fileName] = require(filePath);
      } catch (error) {
        console.error(`Failed to load ${fileName}:`, error);
      }
    }
  });

  return jsonData;
}

const mockData = loadJSONFiles(path.resolve(__dirname, 'src/mockData'));

const paths = globule.find(['src/pug/pages/**/*.pug']);

module.exports = {
  mode,
  entry: './src/js/app.js',
  output: {
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    ...paths.map((path) => {
      return new HtmlWebpackPlugin({
        template: path,
        filename: `${path.split(/\/|.pug/).splice(-2, 1)}.html`,
        templateParameters: {
          MOCK_DATA: mockData,
        },
      });
    }),
    new DefinePlugin({
      'process.env': {
        MOCK_DATA: JSON.stringify(mockData),
      },
    }),
  ],
  devServer: {
    open: true,
    static: {
      directory: './src',
      watch: true,
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env', {}]],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'pug-html-loader',
            options: {
              exports: false,
              data: {
                MOCK_DATA: mockData,
              },
            },
          },
        ],
      },
      {
        test: /\.json$/,
        type: 'javascript/auto',
        loader: 'json-loader',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
