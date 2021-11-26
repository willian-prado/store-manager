const { forEach } = require('p-iteration');
const salesModel = require('../../model/sales');
const productModel = require('../../model/products');
const { validateId, increaseStorage } = require('../../utils/validateIds');

module.exports = async (saleId) => {
  const sale = await salesModel.getById(saleId);
  if (!sale) {
    return { err: { code: 'invalid_data', message: 'Wrong sale ID format' } };
  }

  const products = await validateId(sale.itensSold);
  const restoredProducts = increaseStorage(products, sale.itensSold);
  const ids = Object.keys(restoredProducts);

  await forEach(ids, async (id) => {
    const { name, quantity } = restoredProducts[id];
    await productModel.update({ id, name, quantity });
  });

  const oldSale = await salesModel.remove(saleId);
  return oldSale;
};