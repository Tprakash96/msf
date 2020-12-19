const billPath = {
    '/generate/bill': {
      get: {
        tags: ['bills'],
        summary: 'Create bill',
        description: 'This can only be done by logged in user',
        operationId: 'createBill',
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
              name: 'qty',
              description: 'enter quantity',
            },
        ],
        responses: {
          default: {
            description: 'successful operation',
          },
        },
      },
    },
    '/bills': {
      get: {
        tags: ['bills'],
        summary: 'Get bills',
        description: 'This can only be done by logged in user',
        operationId: 'getBill',
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
            name: 'fromDate',
            description: 'enter from date',
          },
          {
              in: 'query',
              name: 'toDate',
              description: 'enter to date',
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
  
  module.exports = {billPath };
  