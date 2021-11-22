const productsModel = require('../../model/products');

module.exports = async () => {
  const products = await productsModel.getAll();
  return products;
};