'use strict';

const express = require('express');
const app = express();

const notFoundHandler = require('./error-handler/404');
const errorHandler = require('./error-handler/500');
const logger = require('./middelware/logger');
const validator = require('./middelware/validator');


app.use(logger);

function start(port) {
  app.listen(port, () => console.log(`Server Is Running on Port ${port}`));
}

app.get('/', (req, res) => {
  res.send('Welcome to Home page');
});

app.post('/bad', (req, res) => {
  let number = 12;
  number.forEach(x => console.log(x));
  res.send('this a Bad Route ');
});

app.get('/person', validator, (req, res) => {
  res.json({
    name: req.name,
  });
});

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  app: app,
  start: start,
};