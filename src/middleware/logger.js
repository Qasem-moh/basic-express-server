

// eslint-disable-next-line no-undef
module.exports = logger = (req, res, next) => {
  console.log('req is :', req.method, req.path);
  next();
};