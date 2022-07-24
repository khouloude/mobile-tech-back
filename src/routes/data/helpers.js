const fs = require('fs');

const logger = require('../../utils/logger');

const FILE_PATH = __dirname + '/../../data.json';

const flush = (data) => fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2), 'utf8');

module.exports = { flush };
