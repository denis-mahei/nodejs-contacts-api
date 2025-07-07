import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  phoneNumber: Joi.string()
    .pattern(/^\+?[0-9]{10,15}$/)
    .required(),
  email: Joi.string().email({ minDomainSegments: 2 }),
  isFavorite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal').required(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  phoneNumber: Joi.string().pattern(/^\+?[0-9]{10,15}$/),
  email: Joi.string().email({ minDomainSegments: 2 }),
  isFavorite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal'),
});
