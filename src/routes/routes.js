/* eslint-disable comma-dangle */
const swaggerUi = require('swagger-ui-express');
const { swagger } = require('../../swagger/index');
const {login, signup} = require('../controller/login');
const { saveProduct,getProduct, generateBill } = require('../controller/products');
const {getBills}= require('../controller/billHistory');
const { middleware } = require('../middleware');

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger));
  app.post('/api/login',login);
  app.post('/api/signup',signup);
  app.post('/api/product',middleware(),saveProduct);
  app.get('/api/products',middleware(),getProduct);
  app.get('/api/generate/bill',middleware(),generateBill);
  app.get('/api/bills',middleware(),getBills);
};
