const logger = require('pino')();
const {get} = require('../modal/billHistory');


const getBills = async (req,res) => {
    try{
      const {fromDate,toDate} = req.query;
      if(!(fromDate && toDate)){return res.status(301).send("from date & to date required")}
      const result = await get({fromDate,toDate});
      return res.status(200).send(result);
    }
    catch(ex){
      logger.error({ex});
      return res.status(500).send("something went wrong");
    }
};

  module.exports = {
    getBills,
  };
  