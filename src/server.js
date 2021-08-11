const express = require('express');
const app = express();
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const person = require('./middleware/validator');
const logger = require('./middleware/logger');

app.use(express.json());
app.use(logger);
function start(port) {
  app.listen(port, () => console.log(`will run on ${port}`));
}
app.get('/', (req, res) => {
  res.send('Home route');
});
app.post('/bad', (req, res) => {
  let num = 1;
  num.forEach(num =>
    console.log(num));
  res.send('sorry bad req !!!!! ');
});

app.get('/data', (req, res) => {
  res.json({
    id: 1,
    name: 'Samah',
  });
});
app.get('/person', person('samah'), (req, res) => {
  res.json({
    message: 'person route response',
    name: req.personName,

  });
});
app.get('/throwing-error', person(2), (req, res) => {
  res.send(`The error is  ${req.personName}`);
});
app.use(errorHandler);
app.use('*', notFoundHandler);


module.exports = {
  app: app,
  start: start,
};
