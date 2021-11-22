const { ObjectId } = require('mongodb');
const connection = require('../connection');
const getById = require('./getById');

module.exports = async (id) => {
  const product = await getById(id);

  if (!product) return null;

  const db = await connection();
  await db.collection('products').deleteOne({ _id: new ObjectId(id) });

  return product;
};