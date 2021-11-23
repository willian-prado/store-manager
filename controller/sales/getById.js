const rescue = require('express-rescue');
const salesService = require('../../service/sales');

const success = 200;

module.exports = rescue(async (req, res, next) => {
  const { id } = req.params;
  const sale = await salesService.getById(id);

  if (sale.err) return next(sale.err);
  return res.status(success).json(sale);
});