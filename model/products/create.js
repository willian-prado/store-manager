const connection = require('../connection');

module.exports = async (name, quantity) => {
  const db = await connection();
  const newProduct = await db.collection('products').insertOne({ name, quantity });
  return {
    _id: newProduct.insertedId,
    name,
    quantity,
  };
};