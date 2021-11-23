const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (saleObject) => {
  const { id, newSale } = saleObject;
  if (!ObjectId.isValid(id)) return null;

  const db = await connection();
  const sale = await db.collection('sales').findOne({
    _id: new ObjectId(id),
    'itensSold.productId': newSale[0].productId,
  });
  if (!sale) return null;

  await db.collection('sales').updateOne(
    { _id: new ObjectId(id), 'itensSold.productId': newSale[0].productId },
    { $set: { 'itensSold.$.quantity': newSale[0].quantity } },
  );

  return {
    _id: id,
    itensSold: newSale,
  };
};