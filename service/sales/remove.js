const salesModel = require('../../model/sales');

module.exports = async (id) => {
  const sale = await salesModel.remove(id);

  if (!sale) {
    return {
      err: {
        code: 'invalid_data',
        message: 'Wrong sale ID format',
      },
    };
  }

  return sale;
};