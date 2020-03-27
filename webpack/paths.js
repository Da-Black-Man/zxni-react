const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../', 'build'),
  entryPath: path.resolve(__dirname, '../', 'src/index.jsx'),
  templatePath: path.resolve(__dirname, '../', 'src/index.html'),
  imagesFolder: 'assets/images',
  fontsFolder: 'assets/fonts',
  cssFolder: 'assets/css',
  jsFolder: 'assets/js',
  devOutputPath: path.resolve(__dirname, '../', 'src/assets'),
};
