/* eslint-disable no-return-await */
/* eslint-disable implicit-arrow-linebreak */
const { v4: uuid } = require("uuid");

const get = async (filters) =>{
  try{
    const {email,id} = filters;
    let sql = 'SELECT * FROM users ';
  
    const params = [];
    if(id){
      sql += 'WHERE id = ?';
      params.push(id);
    }
    else if(email) {
      sql += 'WHERE email = ?';
      params.push(email);
    }

    const results = await query(sql, params.length?params:null);
    return results[0];
  }
  catch(ex){
    console.log(ex);
  }
}

const save = async (users) => {
    const { email, password } = users;
    const id = uuid();
    const sql = "INSERT INTO users(id,email,password) VALUES(?,?,?)"
    const results = await query(sql, [id,email,password]);
    return results.affectedRows;
};

module.exports = {
  get,
  save,
};
