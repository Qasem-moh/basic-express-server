'use strict';


const express = require('express');

//handle error
const notFoundHandler = require('./error-handles/404');
const serverErrorHandler = require('./error-handles/500');
const logger = require('./middlware/logger');
const checkName = require('./middlware/validator');
const app = express();

app.use(express.json());
app.use(logger);

function start(port) {
  app.listen(port, () => console.log(`Server is running on port ${port}`));
}
// main Route
app.get('/', (req, res) => {
  res.send('this is home page');
});

app.get('/test', checkName('Qasem'), (req, res) => {
  res.json({
    message: 'test route response',
    person: req.person,
  });
});

//secound Route 
app.get('/person/:name', (req, res) => {
  console.log(req.params.name);
  //   res.send(`the name is : ${req.params.name}`);
  res.json({
    name: req.params.name,
  });
});

app.get('/throwing-error', checkName(2), (req, res) => {
  res.send(`the result of squaring is ${req.person}`);
});


//middlware
app.use('*', notFoundHandler);
app.use(serverErrorHandler);

//export function
module.exports = {
  app: app,
  start: start,

};