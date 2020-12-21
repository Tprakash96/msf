/* eslint-disable no-return-await */
/* eslint-disable implicit-arrow-linebreak */
const { v4: uuid } = require("uuid");
const moment = require('moment');

const saveBill = async (bill) => {
    try{
        const {userId, code, pricePerUnit, price, gst, totalPrice} = bill;
        const date = moment().format('YYYY-MM-DD');
        const billId  = uuid();
        const sql = "INSERT INTO bills(id,product_code,price_per_unit,price,gst,total_price,bill_date,created_by,updated_by) VALUES(?,?,?,?,?,?,?,?,?)";
        const results = await query(sql, [billId,code,pricePerUnit,price,gst,totalPrice,date,userId,userId]);
        return results.affectedRows;
    }
    catch(ex){
        console.log(ex);
        return ex;
    }
};

const get = async(filters) => {
    try{
        const {fromDate,toDate} = filters;
        let sql = "SELECT * FROM bills ";
        const params = [];
        if(fromDate && toDate){
            sql += "WHERE bill_date BETWEEN ? AND ?";
            params.push(fromDate);
            params.push(toDate);
        }
        const result = query(sql,params.length?params:null);
        return result;
    }catch(ex){
        return ex;
    }
}

module.exports = {saveBill,get  };
