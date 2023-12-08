const withLess = require("next-with-less");

module.exports = withLess({
  // reactStrictMode: true,
  basePath:"/lp",
  lessLoaderOptions: {},
    assetPrefix: '/lp/',
  images:{
unoptimized:true
  }
});