const { forEach } = require('p-iteration');
const salesModel = require('../../model/sales');
const productModel = require('../../model/products');
const { validateId, decreaseStorage } = require('../../utils/validateIds');

const errorID = {
  err: {
    code: 'invalid_data',
    message: 'Wrong product ID or invalid quantity',
  },
};

const errorStock = {
  err: {
    code: 'stock_problem',
    message: 'Such amount is not permitted to sell',
  },
};

module.exports = async (sale) => {
  const products = await validateId(sale);
  if (!products) return errorID;

  const checkedSales = decreaseStorage(products, sale);
  if (!checkedSales) return errorStock;

  const ids = Object.keys(checkedSales);

  await forEach(ids, async (id) => {
    const { name, quantity } = checkedSales[id];
    await productModel.update({ id, name, quantity });
  });

  const newSale = await salesModel.create(sale);
  
  return newSale;
};