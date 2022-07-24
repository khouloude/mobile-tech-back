const express = require('express');

const data = require('./data');
const { loadData } = require('./services');

module.exports = express.Router().use('/data', loadData, data);
