const { forEach } = require('p-iteration');
const getById = require('../model/products/getById');

module.exports = async (sale) => {
  let isValid = true;

  await forEach(sale, async (prod) => {
    const product = await getById(prod.productId);
    if (!product) isValid = false;
  });

  return isValid;
};
