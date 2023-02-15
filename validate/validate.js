const Joi = require("joi");

const authSchema = Joi.object({
  title: Joi.string().max(20).trim().required(),
  description: Joi.string().max(20).trim().required(),
});

module.exports = {
  authSchema,
};
