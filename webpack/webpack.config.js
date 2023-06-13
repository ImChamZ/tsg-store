const { merge } = require("webpack-merge");
const webpackBase = require("../webpack/webpack.base");

module.exports = (envVar) => {
  const { env } = envVar;
  const envConfig = require(`../webpack/webpack.${env}.js`);
  const config = merge(webpackBase, envConfig);
  return config;
};
