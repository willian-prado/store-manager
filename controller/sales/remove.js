const rescue = require('express-rescue');
const salesService = require('../../service/sales');

const success = 200;

module.exports = rescue(async (req, res, next) => {
  const { id } = req.params;

  const deletedSale = await salesService.remove(id);

  if (deletedSale.err) return next(deletedSale.err);
  return res.status(success).json(deletedSale);
});