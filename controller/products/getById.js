const rescue = require('express-rescue');
const productsService = require('../../service/products');

const success = 200;

module.exports = rescue(async (req, res, next) => {
  const { id } = req.params;
  
  const product = await productsService.getById(id);

  if (product.err) return next(product.err);

  return res.status(success).json(product);
});