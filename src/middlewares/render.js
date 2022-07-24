const httpStatus = require('http-status');

const list = (req, res) => {
  res.status(httpStatus.OK).json(res.locals);
};

const update = (req, res) => {
  res.status(httpStatus.OK).json(res.locals);
};

const create = (req, res) => {
  res.status(httpStatus.CREATED).json(res.locals);
}

const remove = (req, res) => {
  res.status(httpStatus.NO_CONTENT).send({});
}


module.exports = {
  list,
  update,
  create,
  remove,
};