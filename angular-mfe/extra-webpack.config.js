const singleSpaAngularWebpack =
  require("single-spa-angular/lib/webpack").default;

module.exports = (config, options) => {
  config.externals = ["@jbblt/react-mfe", "@jbblt/utility"];

  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);
  // Feel free to modify this webpack config however you'd like to

  return singleSpaWebpackConfig;
};
