const httpStatus = require('http-status');
const APIError = require('../../utils/api-error');
const validate = require('../../middlewares/validate');

const checkName = (req) => {
  const { name } = req.params;
  const target = req.locals.data.find((el) => el.name === name);

  if (!target) {
    throw new APIError(
      httpStatus.NOT_FOUND,
      JSON.stringify({
        code: 'NAME_NOT_FOUND',
        message: `Data with name ${name} does not exist`,
      }),
    );
  }

  return true;
};

const checkIndex = (req) => {
  const { name, index } = req.params;
  const target = req.locals.data.find((el) => el.name === name);

  if (!target || !target?.values[index]) {
    throw new APIError(
      httpStatus.NOT_FOUND,
      JSON.stringify({
        code: 'INDEX_NOT_FOUND',
        message: `Data ${name} with index ${index} does not exist`,
      }),
    );
  }

  return true;
};

const checkUnicity = (req) => {
  const { name } = req.body;
  const target = req.locals.data.find((el) => el.name === name);

  if (target) {
    throw new APIError(
      httpStatus.BAD_REQUEST,
      JSON.stringify({
        code: 'DATA_ALREADY_EXISTS',
        message: `Data name ${name} has been taken`,
      }),
    );
  }
};

module.exports = {
  create: validate([checkUnicity]),
  updateName: validate([checkName, checkUnicity]),
  updateValue: validate([checkName, checkIndex]),
  addValue: validate([checkName]),
};
