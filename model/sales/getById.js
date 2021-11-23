const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await connection();
  const sale = await db.collection('sales').findOne(new ObjectId(id));
  if (!sale) return null;
  return sale;
};