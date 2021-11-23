const rescue = require('express-rescue');
const salesService = require('../../service/sales');

const success = 200;

module.exports = rescue(async (req, res, _next) => {
  const sales = await salesService.getAll();
  return res.status(success).json({ sales });
});