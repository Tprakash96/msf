/* eslint-disable no-return-await */
/* eslint-disable implicit-arrow-linebreak */
const billHistory = require('../db/collections/billHistory');
const moment = require('moment');

const saveBill = async (bill) => {
  try {
      const date = moment().format('YYYY-MM-DD');
      console.log({date});
    const res = await billHistory.insertMany({...bill,date});
    return res;
  } catch (e) {
      return e;
    }
};

const get = async(filters) => {
    try{
        const {fromDate,toDate} = filters;
        const res = await billHistory.find({});
        const result = res.filter((row)=>{
            return new Date(row.date) >= new Date(fromDate) && 
            new Date(row.date) <= new Date(toDate)
        });
        return result;
    }catch(ex){
        return ex;
    }
}

module.exports = {saveBill,get  };
