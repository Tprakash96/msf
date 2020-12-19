const user = {
  type: 'object',
  properties: {
    userName: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
  },
  xml: {
    name: 'User',
  },
};
const login = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
  },
  xml: {
    name: 'Login',
  },
};
const apiResponse = {
  type: 'object',
  properties: {
    success: {
      type: 'boolean',
    },
    token: {
      type: 'string',
    }
  },
};

module.exports = {
  user,
  apiResponse,
  login,
};
