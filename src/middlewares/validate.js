module.exports = (validators) => async (req, res, next) => {
  try {
    await Promise.all(validators.map((v) => v(req)));
  } catch (err) {
    return next(err);
  }

  return next();
}