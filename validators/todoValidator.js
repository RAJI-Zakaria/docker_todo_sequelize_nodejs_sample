const Joi = require('joi');

const validateCreateTodo = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    // Add other validations as needed
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

const validateDeleteTodo = (req, res, next) => {
  const schema = Joi.object({
    id: Joi.number().required(),
    // Add other validations as needed
  });

  const { error } = schema.validate(req.params);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = {
  validateCreateTodo,
  validateDeleteTodo,
};
