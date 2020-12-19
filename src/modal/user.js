/* eslint-disable no-return-await */
/* eslint-disable implicit-arrow-linebreak */
const Users = require('../db/collections/users');
const { USER_ID_ALREADY_EXIST } = require('../utils/response-status');

const get = async (filters, fields) =>
  await Users.find({ ...filters, isActive: true }, { ...fields });

const save = async (users) => {
  try {
    const res = await Users.insertMany(users);
    return res;
  } catch (e) {
    if (e.code === 11000) {
      const err = [
        {
          errCode: USER_ID_ALREADY_EXIST,
          UserId: 'email  already exists',
          value: e.toString(),
        },
      ];
      return {err};
    }
  }
};

module.exports = {
  get,
  save,
};
