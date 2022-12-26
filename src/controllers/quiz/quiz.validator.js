const Joi = require('joi');

export const findById = {
  body: {
    id: Joi.number().required(),
  },
};