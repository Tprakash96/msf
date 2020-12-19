const { hostName, port } = require('../config');
const { user, login } = require('./definitions/user');
const { product } = require('./definitions/product');

const { userPath } = require('./paths/user');
const { productPath } = require('./paths/product');
const { billPath } = require('./paths/bill');

const swagger = {
  swagger: '2.0',
  info: {
    description: 'Marketsimplified API Documentation',
    version: '1.0.0',
    title: 'Marketsimplified',
    termsOfService: 'http://swagger.io/terms/',
    contact: {
      email: '',
    },
    license: {
      name: 'Apache 2.0',
      url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  host: `${hostName}`,
  basePath: '/api',
  tags: [
    {
      name: 'user',
      description: 'Operations about user',
    },
    {
      name: 'product',
      description: 'Operations about product',
    },
    {
      name: 'bills',
      description: 'Operations about bills',
    },
  ],
  schemes: ['http', 'https'],
  paths: {
    ...userPath,
    ...productPath,
    ...billPath
  },
  securityDefinitions: {
    petstore_auth: {
      type: 'oauth2',
      authorizationUrl: 'http://petstore.swagger.io/oauth/dialog',
      flow: 'implicit',
      scopes: {
        'write:pets': 'modify pets in your account',
        'read:pets': 'read your pets',
      },
    },
    api_key: {
      type: 'apiKey',
      name: 'api_key',
      in: 'header',
    },
  },
  definitions: {
    User: user,
    Login:login,
    Product:product
  },
};

module.exports = {
  swagger,
};
