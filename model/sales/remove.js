const { ObjectId } = require('mongodb');
const getById = require('./getById');
const connection = require('../connection');

module.exports = async (id) => {
  const sale = await getById(id);
  if (!sale) return null;
  const db = await connection();
  await db.collection('sales').deleteOne(
    { _id: new ObjectId(id) },
  );
  return sale;
};