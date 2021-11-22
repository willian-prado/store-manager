const rescue = require('express-rescue');
const productsService = require('../../service/products');

const successCode = 200;

module.exports = rescue(async (req, res, _next) => {
  const products = await productsService.getAll();
  return res.status(successCode).json(products);
});