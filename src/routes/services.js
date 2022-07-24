const data = require('../data.json');

const loadData = (req, res, next) => {
  req.locals = {
    data,
  };

  return next();
};

module.exports = {
  loadData,
};
