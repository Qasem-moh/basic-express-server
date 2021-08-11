// eslint-disable-next-line no-undef
module.exports = person = (userName) => {
  return (req, res, next) => {
    req.personName = userName;
    if (typeof userName == 'string') {

      next();
    }
    else
      next(`sorry the value not string : ' ${userName} '`);
  };
};