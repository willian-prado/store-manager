const productsModel = require('../../model/products');

module.exports = async (id) => {
  const product = await productsModel.getById(id);

  if (!product) {
    return {
      err: {
        code: 'invalid_data',
        message: 'Wrong id format',
      },
    };
  }

  return product;
};