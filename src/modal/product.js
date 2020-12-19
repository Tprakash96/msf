/* eslint-disable no-return-await */
/* eslint-disable implicit-arrow-linebreak */
const Products = require('../db/collections/product');

const get = async (filters) =>{
        const res = await Products.find({ ...filters, isActive: true });
        console.log({res});
        return res;
}
  

const save = async (users) => {
    const res = await Products.insertMany(users);
    return res;
};

module.exports = {
  save,
  get
};
