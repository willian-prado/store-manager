const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (updatedProduct) => {
  const { id, name, quantity } = updatedProduct;
  const db = await connection();
  await db.collection('products').updateOne(
    { _id: new ObjectId(id) },
    { $set: { name, quantity } },
  );

  return {
    _id: id,
    name,
    quantity,
  };
};