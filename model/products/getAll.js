const connection = require('../connection');

module.exports = async () => {
  const db = await connection();
  const products = await db.collection('products').find().toArray();
  return {
    products,
  };
};