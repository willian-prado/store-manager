const Joi = require('@hapi/joi');

module.exports = (body) => {
  const { error } = Joi.object({
    name: Joi.string().min(5).required(),
    quantity: Joi.number().integer().min(1).required(),
  }).validate(body);

  return error;
};