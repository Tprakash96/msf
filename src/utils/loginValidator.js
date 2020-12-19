/* eslint-disable no-throw-literal */
/* eslint-disable no-undef */
const bcrypt = require('bcrypt');
const {unAuthorizedError} = require('./errorMessage');

const checkLoginParameter = (loginObject = {}) => {
  if (
    !Object.prototype.hasOwnProperty.call(loginObject, 'email') ||
    !Object.prototype.hasOwnProperty.call(loginObject, 'password')
  ) {
    throw unAuthorizedError("Invallid Object");
  }
  const { email, password } = loginObject;
  if (
    email === null ||
    password === null ||
    email.length <= 0 ||
    password.length <= 0
  ) {throw unAuthorizedError("Invallid Object");}
  return loginObject;
};

const checkPassword = (user, pass) => {
  try{
    if (user === null) {return {err:'Invalid Object'};}
    // eslint-disable-next-line no-underscore-dangle
    const tokenObj = { ...user._doc };
    const { password} = user;
    console.log({password});
    if (!bcrypt.compareSync(pass, password)){
      return {err:'Invalid Object'}
    };
    // eslint-disable-next-line no-param-reassign
    delete tokenObj.password;
    return { tokenObj };
  }
  catch(ex){
    console.log(ex);
    return ex;
  }
  
};

module.exports = {
  checkLoginParameter,
  checkPassword,
};
