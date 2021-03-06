const express = require('express');
const bodyParser = require('body-parser');
const decisionsRouter = require('./routers/decisions-router');
const path = require('path');

module.exports = db => {
  const app = express();
  const decisions = db.collection('decisions');
  const publicPath = path.join(__dirname, '/public')

  app
    .use(express.static(publicPath))
    .use(bodyParser.json())
    .use('/api/decisions', decisionsRouter(decisions))

  return app;
}