const imagesRoutes = require('./images');

module.exports = function (config, db, logger) {
  return [].concat(imagesRoutes(config, db, logger));
};
