const webpack = require('webpack');

const commonPaths = require('./paths');

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false,
              localsConvention: 'camelCase',
              // modules: {
              //   localIdentName: '[local]___[hash:base64:5]',
              // },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    contentBase: commonPaths.devOutputPath,
    compress: true,
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',
    port: 8080,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
