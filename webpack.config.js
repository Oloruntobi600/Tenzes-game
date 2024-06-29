const path = require('path');

module.exports = {
  mode: 'production', // or 'production' based on your environment
  output: {
    filename: '[name].pack.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {}
  },
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
        exclude: /node_modules/,
        test: /\.js$/
      }
    ]
  },
  entry: {
    index: './index.js'
  }
};
