/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
const validator = require('validator');
const {
  EMAIL_IS_NOT_VALID,
  MIN_LENGTH,
  PASSWORD_IS_NOT_VALID,
  INVALID_BOOLEAN_TYPE,
  INVALID_MONGO_ID,
} = require('../utils/response-status');


const isEmail = (value) => validator.isEmail(value);

const verifyPassword = (value) => value.length >= 8 && value.length <= 16;

const isBoolean = (value) => typeof value === 'boolean';

const isEmpty = (value) => validator.isEmpty(value);

const verifyMongoID = (value) => validator.isMongoId(value);

const isMinLength = (value, minLength) => value.length >= minLength;

const validate = (rules) => {
  let isError = false;
  const errMsgs = [];
  rules.forEach((rule) => {
    if (rule.type === 'email' && !isEmail(rule.value)) {
      isError = true;
      errMsgs.push({
        errCode: EMAIL_IS_NOT_VALID,
        [rule.fieldName]: 'Email is not valid',
      });
    } else if (
      rule.type === 'string' &&
      !isMinLength(rule.value, rule.minLength)
    ) {
      isError = true;
      errMsgs.push({
        errCode: MIN_LENGTH,
        [rule.fieldName]: `${rule.fieldName} at least ${rule.minLength} characters`,
      });
    } else if (rule.type === 'password' && !verifyPassword(rule.value)) {
      isError = true;
      errMsgs.push({
        errCode: PASSWORD_IS_NOT_VALID,
        [rule.fieldName]: `${rule.fieldName} should be 8 to 16 characters`,
      });
    } else if (rule.type === 'boolean' && !isBoolean(rule.value)) {
      isError = true;
      errMsgs.push({
        errCode: INVALID_BOOLEAN_TYPE,
        [rule.fieldName]: `${rule.fieldName} should be an true/false`,
      });
    } else if (rule.type === 'mongoId' && !verifyMongoID(rule.value)) {
      isError = true;
      errMsgs.push({
        errCode: INVALID_MONGO_ID,
        [rule.fieldName]: `${rule.fieldName} is not valid`,
      });
    }
  });
  return { isError, errMsgs };
};

module.exports = {
  isEmail,
  verifyPassword,
  isBoolean,
  isEmpty,
  verifyMongoID,
  isMinLength,
  validate,
};
