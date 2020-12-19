const productPath = {
    '/product': {
      post: {
        tags: ['product'],
        summary: 'Create Product',
        description: 'This can only be done by logged in user',
        operationId: 'createProduct',
        produces: ['application/xml', 'application/json'],
        parameters: [
          {
            name: "token",
            in: "header",
            required: false,
            type: "string"
          },
          {
            in: 'body',
            name: 'body',
            description: 'Created product object',
            required: true,
            schema: {
              $ref: '#/definitions/Product',
            },
          },
        ],
        responses: {
          default: {
            description: 'successful operation',
          },
        },
      },
    },
    '/products': {
      get: {
        tags: ['product'],
        summary: 'Get Product',
        description: 'This can only be done by logged in user',
        operationId: 'getProduct',
        produces: ['application/xml', 'application/json'],
        parameters: [
          {
            name: "token",
            in: "header",
            required: false,
            type: "string"
          },
          {
            in: 'query',
            name: 'code',
            description: 'enter product code',
          },
          {
              in: 'query',
              name: 'name',
              description: 'enter product name',
            },
        ],
        responses: {
          default: {
            description: 'successful operation',
          },
        },
      },
    },
  
  };
  
  module.exports = { productPath };
  