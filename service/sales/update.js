const salesModel = require('../../model/sales');

module.exports = async (saleObject) => {
  const newSale = await salesModel.updateArray(saleObject);

  if (!newSale) {
    return {
      err: {
        code: 'invalid_data',
        message: 'Wrong product ID or invalid quantity',
      },
    };
  }

  return newSale;
};