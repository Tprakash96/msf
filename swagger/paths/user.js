const userPath = {
  '/signup': {
    post: {
      tags: ['user'],
      summary: 'Create user',
      description: 'This can  be done by anyone',
      operationId: 'createUser',
      produces: ['application/xml', 'application/json'],
      parameters: [
        {
          in: 'body',
          name: 'body',
          description: 'Created user object',
          required: true,
          schema: {
            $ref: '#/definitions/User',
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
  
  '/login': {
    post: {
      tags: ['user'],
      summary: 'Logs user into the system',
      description: 'This can  be done by anyone',
      operationId: 'loginUser',
      produces: ['application/xml', 'application/json'],
      parameters: [
        {
          in: 'body',
          name: 'body',
          description: 'Pet object that needs to be added to the store',
          required: true,
          schema: {
            $ref: '#/definitions/Login',
          },
        },
      ],
      responses: {
        200: {
          description: 'successful operation',
        },
        400: {
          description: 'Invalid userId/password supplied',
        },
      },
    },
  },
};

module.exports = { userPath };
