const connection = require('../connection');

module.exports = async (newSale) => {
  const db = await connection();
  const sales = await db.collection('sales').insertOne(
    {
      itensSold: newSale,
    },
  );

  return {
    _id: sales.insertedId,
    itensSold: newSale,
  };
};