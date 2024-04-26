const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/bangazon-client-bangazon-team-5-client-elizabeth' : '',
  assetPrefix: isProd ? '/bangazon-client-bangazon-team-5-client-elizabeth/' : '',
};