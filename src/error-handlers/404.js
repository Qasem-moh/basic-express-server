'use strict';
module.exports = (req, res) => {

  res.status(404).json({
    code: 404,
    route: req.path,
    message: 'Err Page not exist',
  });
};