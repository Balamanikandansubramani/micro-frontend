module.exports = {
  // Ensure webpack can determine the correct URL for dynamic chunks when
  // this app is loaded as a remote by another container. 'auto' makes
  // webpack derive the public path from the script src at runtime.
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
          test: /\.m?js$/,
          exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
};
