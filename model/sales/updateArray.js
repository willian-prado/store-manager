const { forEach } = require('p-iteration');
const { ObjectId } = require('mongodb');
const getById = require('./getById');
const connection = require('../connection');

module.exports = async ({ id, newSale }) => {
  if (!ObjectId.isValid(id)) return null;
  const sale = await getById(id);
  if (!sale) return null;

  const db = await connection();

  await forEach(newSale, async (prod) => {
    await db.collection('sales').updateOne(
      { _id: new ObjectId(id), 'itensSold.productId': prod.productId },
      { $set: { 'itensSold.$.quantity': prod.quantity } },
      );
   });
  
  return { _id: id, itensSold: newSale };
};