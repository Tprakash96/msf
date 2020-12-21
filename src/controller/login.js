/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const logger = require('pino')();
const { validate } = require('../validator/index');
const { save,get } = require('../modal/user');
const { jwtSecret,jwtExpiry } = require('../../config');
const {
  checkLoginParameter,
  checkPassword,
} = require('../utils/loginValidator');

const signup = async (req,res) => {
  try{
    const { userName,email,password } = req.body;
    const { isError, errMsgs } = validate([
        { fieldName: 'email', value: email, type: 'email' },
        {
          fieldName: 'password',
          value: password,
          type: 'password',
        },
      ]);
    passwordHash = bcrypt.hashSync(password, 10);
    if (isError) res.status(301).send({errMsgs})
    
    const {err} = await save({userName,email,password:passwordHash}); 
    if(err) res.status(500).send(err);
    return res.status(200).send({sucess:true});
  }
  
  catch(ex){
    logger.error({ex});
    if (ex.code === 'ER_DUP_ENTRY') {
      return res.status(409).send({
        email: 'email  already exist',
      });
    }
    else return res.status(500).send("something went wrong");
  }
};

const login = async (req,res) => {
  try{
    const { email, password } = checkLoginParameter(req.body);
    const user = await get({ email });
    const { err,tokenObj } = checkPassword(user, password);

    if(err) return res.status(401).send({errMsg:'Invalid userName/Password'});
    
    else if(tokenObj){
      const token = jwt.sign(tokenObj, jwtSecret, {
        algorithm: 'HS256',
        expiresIn: jwtExpiry,
      });
      return res.status(200).send({
        sucess:true,
        token
      });
    }
  }
  catch(ex){
    logger.error({ex});
    return res.status(500).send("something went wrong");
  }
};

module.exports = {
  login,
  signup
};
