const product = {
    type: 'object',
    properties: {
        code:{
            type: 'string',
            required: true,
            unique: true,
        },
        name: {
            type: 'string',
            required: true,
        },
        price: {
            type: 'number',
            required: true,
        },
        gst: {
            type: 'number',
            required: true,
        },
    },
    xml: {
      name: 'Product',
    },
  };
   
  module.exports = {
    product
  };
  