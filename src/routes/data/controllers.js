const logger = require('../../utils/logger');
const helpers = require('./helpers');

const FILE_PATH = '../../data.json';

const list = (req, res, next) => {
  const { data } = req.locals;
  res.locals = data.map(({ name, values }) => ({
    name,
    values: values.slice(0, 19),
  }));

  return next();
};

const updateName = (req, res, next) => {
  const {
    params: { name },
    locals: { data },
  } = req;
  const target = data.find((el) => el.name === name);
  target.name = req.body.name;

  helpers.flush(data);

  res.locals = target;

  return next();
};

const updateValue = (req, res, next) => {
  const {
    params: { name, index },
    locals: { data },
  } = req;
  const target = data.find((el) => el.name === name);
  target.values[index] = req.body.value;

  helpers.flush(data);

  res.locals = target;

  return next();
};

const addValue = (req, res, next) => {
  const {
    params: { name },
    locals: { data },
  } = req;
  const target = data.find((el) => el.name === name);
  target.values.push(req.body.value);

  helpers.flush(data);

  res.locals = target;

  return next();
};

const create = (req, res, next) => {
  const { data } = req.locals;
  res.locals = [
    ...data,
    {
      name: req.body.name,
      values: [],
    },
  ];

  helpers.flush(res.locals);

  return next();
};

const remove = (req, res, next) => {
  const {
    locals: { data },
  } = req;
  helpers.flush(data.filter(({ name }) => name !== req.body.name));

  return next();
};

module.exports = {
  list,
  create,
  addValue,
  updateName,
  updateValue,
  remove,
};
