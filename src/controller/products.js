const logger = require('pino')();
const { save,get } = require('../modal/product');
const {saveBill} = require('../modal/billHistory');

const saveProduct = async (req,res) => {
    try{
      const {code,name,price,gst} = req.body;
      const {id} = req.user;
      await save({userId:id,code,name,price,gst},res);
      return res.status(200).send({sucess:true});
    }
    catch(ex){
      logger.error({ex});
      if (ex.code === 'ER_DUP_ENTRY') {
        return res.status(409).send({
          email: 'product  already exist',
        });
      }
      else return res.status(500).send("something went wrong");
    }
  };

const getProduct = async (req,res) => {
    try{
      const {code,name} = req.query;
      let filters = {};
      if(code) filters={...filters,code};
      if(name) filters={...filters,name};
      const result = await get(filters);
      return res.status(200).send(result);
    }
    catch(ex){
      logger.error({ex});
      return res.status(500).send("something went wrong");
    }
};

const generateBill = async (req,res) => {
    try{
        const {code,qty} = req.query;
        const {id} = req.user;
        const productDetail = await get({code});
        const {price_per_unit:pricePerUnit,gst} = productDetail;
        const price = pricePerUnit * qty;
        const gstValue = (gst/100)* price;
        const totalPrice = price + gstValue;
        const bill = {
            userId:id,
            code,
            pricePerUnit,
            price,
            gst,
            totalPrice
        }
        await saveBill(bill);
        return res.status(200).send(bill);
      }
      catch(ex){
        logger.error({ex});
        return res.status(500).send("something went wrong");
      }
}

  module.exports = {
    saveProduct,
    getProduct,
    generateBill
  };
  