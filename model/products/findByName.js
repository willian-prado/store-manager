const connection = require('../connection');

module.exports = async (name) => {
  const db = await connection();
  const product = await db.collection('products').findOne({ name });

  if (!product) return null;
  return product;
};