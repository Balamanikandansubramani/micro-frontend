const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const htmlWebpackPlugin = require('html-webpack-plugin');
const moduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8082,
    historyApiFallback: {
      index: 'index.html',
    },
  },
    plugins: [
    new htmlWebpackPlugin({
      // the template lives in the project's public folder
      template: './public/index.html',
    }),
    new moduleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
        exposes: {
          './MarketingApp': './src/bootstrap',
        },
        shared: packageJson.dependencies,
      }),
  ],
};

module.exports = merge(commonConfig, devConfig);
