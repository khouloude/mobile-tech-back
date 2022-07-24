const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const httpStatus = require('http-status');
const { errorConverter, errorHandler } = require('./middlewares/error');
const ApiError = require('./utils/api-error');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '10mb' }));

let allowedOrigins = [/\.forestadmin\.com$/];

if (process.env.CORS_ORIGINS) {
  allowedOrigins = allowedOrigins.concat(process.env.CORS_ORIGINS.split(','));
}

app.use(cors());

// v1 api routes
app.use('/api/v1', routes);

app.use('/status', (req, res) => {
  res.status(httpStatus.OK).json({
    success: true,
  });
});



app.use(errorConverter);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  return next(new ApiError(httpStatus.NOT_FOUND, 'Not found'))
});

app.use(errorHandler);

module.exports = app;