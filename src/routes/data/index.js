const express = require('express');

const controllers = require('./controllers');
const validators = require('./validate');
const render = require('../../middlewares/render');

module.exports = express
  .Router()
  .get('/', controllers.list, render.list)
  .post('/', validators.create, controllers.create, render.create)
  .delete('/', controllers.remove, render.remove)
  .patch('/:name', validators.updateName, controllers.updateName, render.update)
  .post('/:name/value', validators.addValue, controllers.addValue, render.create)
  .patch('/:name/value/:index', validators.updateValue, controllers.updateValue, render.update);
