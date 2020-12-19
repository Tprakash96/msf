/* eslint-disable curly */
/* eslint-disable no-unused-vars */
/* eslint-disable nonblock-statement-body-position */
/* eslint-disable arrow-body-style */
const logger = require('pino')();
const {
  VALIDATION_ERROR,UNAUTHORIZED
} = require('./response-status');

const errorFormat = {
  INTERNAL_SERVER_ERROR: { success: false, message: 'Something went wrong' },
  ALREADY_EXIST: { errors: 'Already exists!' },
  VALIDATION_ERROR: { errors: 'Validation Error!' },
};

const validationError = (errMsg) => {
  return { status: VALIDATION_ERROR, errMsg };
};

const unAuthorizedError = (errMsg) => {
  return { status: UNAUTHORIZED, errMsg };
};

module.exports = { error: errorFormat,unAuthorizedError,  validationError };
