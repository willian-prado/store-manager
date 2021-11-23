const rescue = require('express-rescue');
const salesService = require('../../service/sales');
const salesValidation = require('../../utils/salesValidation');

const success = 200;

module.exports = rescue(async (req, res, next) => {
  const { id } = req.params;
  const newSale = req.body;

  const error = salesValidation(newSale);

  if (error) {
    return next(error);
  }

  const saleObject = { id, newSale };

  const updatedSale = await salesService.update(saleObject);
  if (updatedSale.err) return next(updatedSale.err);

  return res.status(success).json(updatedSale);
});