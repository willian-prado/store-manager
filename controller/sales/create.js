const rescue = require('express-rescue');
const salesValidation = require('../../utils/salesValidation');
const salesService = require('../../service/sales');

const success = 200;

module.exports = rescue(async (req, res, next) => {
  const sales = req.body;

  const error = salesValidation(sales);

  if (error) return next(error);

  const newSale = await salesService.create(sales);

  if (newSale.err) return next(newSale.err);
  
  return res.status(success).json(newSale);
});