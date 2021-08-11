const express = require('express');
const app = express();
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const person = require('./middleware/validator');
const logger = require('./middleware/logger');

app.use(express.json());
app.use(logger);
function start(port) {
  app.listen(port, () => console.log(`server is running on port ${port}`));
}
app.get('/', (req, res) => {
  res.send('Home Page route');
});
app.post('/bad', (req, res) => {
  let num = 1;
  num.forEach(num =>
    console.log(num));
  res.send('sorry this bad req');
});

app.get('/data', (req, res) => {
  res.json({
    id: 2171246,
    name: 'Qasem',
  });
});
app.get('/person', person('Qasem'), (req, res) => {
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
