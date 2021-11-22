const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const db = await connection();
  const product = await db.collection('products').findOne(new ObjectId(id));
  
  if (!product) return null;
  return product;
};