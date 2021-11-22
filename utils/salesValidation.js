const Joi = require('@hapi/joi');

module.exports = (body) => {
  const { error } = Joi.array().items(
    Joi.object({
      productId: Joi.string().required(),
      quantity: Joi.number().integer().min(1).required(),
    }),
  ).validate(body);

  return error;
};