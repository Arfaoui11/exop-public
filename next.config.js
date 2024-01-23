const withLess = require("next-with-less");

module.exports = withLess({
  // reactStrictMode: true,
  basePath: "/lp",
  lessLoaderOptions: {},
  useFileSystemPublicRoutes: false,
  useHash: true,
  assetPrefix: '/lp/',
  images: {
    unoptimized: true
  }
});