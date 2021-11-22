const rescue = require('express-rescue');
const productsValidation = require('../../utils/productsValidation');
const productsService = require('../../service/products');

const createdCode = 201;

module.exports = rescue(async (req, res, next) => {
  const { name, quantity } = req.body;

  const error = productsValidation(req.body);
  if (error) return next(error);

  const newProduct = await productsService.create(name, quantity);

  if (newProduct.err) return next(newProduct.err);

  return res.status(createdCode).json(newProduct);
});