const { forEach } = require('p-iteration');
const getById = require('../model/products/getById');

const validateId = async (sales) => {
  let isValid = true;

  const products = {};
  const idKey = '_id';

  await forEach(sales, async (prod) => {
    const product = await getById(prod.productId);
    if (!product) isValid = false;

    products[product[idKey]] = {
      name: product.name,
      quantity: product.quantity,
    };
  });

  if (isValid === false) return null;
  return products;
};

const decreaseStorage = (products, sales) => {
  let enoughItems = true;
  const myProducts = products;

  sales.forEach(({ productId, quantity }) => {
    if (myProducts[productId].quantity - quantity < 0) {
      enoughItems = false;
    }
    myProducts[productId].quantity -= quantity;
  });

  if (enoughItems === false) return null;
  return myProducts;
};

const increaseStorage = (products, sales) => {
  const myProducts = products;

  sales.forEach(({ productId, quantity }) => {
    myProducts[productId].quantity += quantity;
  });

  return myProducts;
};

module.exports = {
  validateId,
  decreaseStorage,
  increaseStorage,
};