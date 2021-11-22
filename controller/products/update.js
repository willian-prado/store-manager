const rescue = require('express-rescue');
const productsValidation = require('../../utils/productsValidation');
const productsService = require('../../service/products');

const success = 200;

module.exports = rescue(async (req, res, next) => {
  const { id } = req.params;
  
  const error = productsValidation(req.body);
  if (error) return next(error);

  const productObject = { id, ...req.body };

  const updatedProduct = await productsService.update(productObject);
  if (updatedProduct.err) return (updatedProduct.err);
  return res.status(success).json(productObject);
});