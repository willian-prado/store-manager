const connection = require('../connection');

module.exports = async () => {
  const db = await connection();
  const sales = await db.collection('sales').find().toArray();
  return sales;
};