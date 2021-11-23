const salesModel = require('../../model/sales');

module.exports = async () => {
  const sales = salesModel.getAll();
  return sales;
};