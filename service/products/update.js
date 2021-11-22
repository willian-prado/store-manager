const productsModel = require('../../model/products');

module.exports = async (updatedProduct) => {
  const { id } = updatedProduct;
  const product = await productsModel.getById(id);
  
  if (!product) {
    return {
      err: {
        code: 'invalid_data',
        message: 'Wrong id format',
      },
    };
  }

  const update = await productsModel.update(updatedProduct);
  return update;
};