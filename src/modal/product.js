/* eslint-disable no-return-await */
/* eslint-disable implicit-arrow-linebreak */
const { v4: uuid } = require("uuid");

const get = async (filters) =>{
  try{
    const {code,name} = filters;
    let sql = 'SELECT * FROM products ';
  
    const params = [];
    if(code && name){
      sql += 'WHERE code = ? OR name = ?';
      params.push(code);
      params.push(name);
    }
    else{
      if(code){
        sql += 'WHERE code = ?';
        params.push(code);
      }
      if(name) {
        sql += 'WHERE name = ?';
        params.push(name);
      }
    }

    const results = await query(sql, params.length?params:null);
    return results[0];
  }
  catch(ex){
    console.log(ex);
  }
  
  const {email,id} = filters;
  
  return res;
}
  

const save = async (details) => {
  const { userId,code,name,price,gst } = details;
  const productId = uuid();
  const sql = "INSERT INTO products(id,code,name,price_per_unit,gst,created_by,updated_by) VALUES(?,?,?,?,?,?,?)"
  const results = await query(sql, [productId,code,name,price,gst,userId,userId]);
  return results.affectedRows;
};

module.exports = {
  save,
  get
};
