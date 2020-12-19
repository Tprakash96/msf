/* eslint-disable object-curly-newline */
/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const config = require('../../config');
const Users = require('../db/collections/users');

const { jwtSecret } = config;
const middleware = () => async (req, res, next) => {
  try {
    req.user = {};
    const { token } = req.headers;
    if (!token) {
      return res
        .status(401)
        .send({ status: 401, error: 'Unauthorized' });
      }
      const { email } = jwt.verify(
        token,
        jwtSecret
      );
      const user = await Users.findOne({ email, isActive: true });
      if(user && Object.keys(user).length>0){
        return next();
      } 
      else return res.status(401).send({errMsg: 'unAtuthorized user'});
  } catch (e) {
    console.log({e});
    if (e instanceof jwt.JsonWebTokenError) {
      console.error(e.toString());
      return res
        .status(401)
        .send({ error: 'Unauthorized' });
    }
    console.error(e.toString());
    return res
      .status(401)
      .send({error: 'Unauthorized' });
  }
};

module.exports = {
  middleware,
};
