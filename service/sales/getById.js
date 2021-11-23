const salesModel = require('../../model/sales');

module.exports = async (id) => {
  const sale = await salesModel.getById(id);

  if (!sale) {
    return {
      err: {
        code: 'not_found',
        message: 'Sale not found',
      },
    };
  }

  return sale;
};