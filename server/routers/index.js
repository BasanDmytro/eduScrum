const fs = require('fs');
const api = require('./api/index');
const path = require('path');

module.exports = app => {
  app.use('/api', api);

  app.get('*', (req, res) => {
    fs.readFile(`${path.resolve(__dirname, '..', 'public', 'dist')}/index.html`, (error, html) => {
      res.setHeader('Content-Type', 'text/html');
      res.end(html);
    });
  });
};
