const rescue = require('express-rescue');
const productsService = require('../../service/products');

const success = 200;

module.exports = rescue(async (req, res, next) => {
  const { id } = req.params;

  const deletedProduct = await productsService.remove(id);
  if (deletedProduct.err) return next(deletedProduct.err);

  return res.status(success).json(deletedProduct);
});