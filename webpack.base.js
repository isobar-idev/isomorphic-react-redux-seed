'use strict';

module.exports = {
  entry: './app/scripts/app.js',
  eslint: {
    configFile: '.eslintrc.json',
    failOnWarning: true,
    failOnError: true
  },
  output: {
    path: './dist/js/',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: ['babel'],
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    // add shortcut as alias
    alias: {
      '@scripts': './app/scripts'
    },
    // extensions listed here can be omitted in `import`s
    extensions: ['', '.js', '.jsx']
  }
};