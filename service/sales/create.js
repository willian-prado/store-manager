const salesModel = require('../../model/sales');
const validateIds = require('../../utils/validateIds');

module.exports = async (sales) => {
  const isValid = await validateIds(sales);

  if (isValid === false) {
    return {
      err: {
        code: 'invalid_data',
        message: 'Wrong product ID or invalid quantity',
      },
    };
  }

  const newSale = await salesModel.create(sales);
  return newSale;
};