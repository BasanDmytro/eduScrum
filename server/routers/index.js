const api = require('./api/index');

module.exports = app => {
  app.use('/api', api);
};
