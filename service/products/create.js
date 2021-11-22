const productsModel = require('../../model/products');

module.exports = async (name, quantity) => {
  const product = await productsModel.findByName(name);

  if (product) {
    return {
      err: {
        code: 'invalid_data',
        message: 'Product already exists',
      },
    };
  }

  const newProduct = await productsModel.create(name, quantity);
  return newProduct;
};