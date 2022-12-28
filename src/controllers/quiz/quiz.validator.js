import { text } from 'body-parser';

const Joi = require('joi');

export const findById = {
  body: {
    id: Joi.number().required(),
  },
};

export const create = {
  body: {
    name: Joi.string().required(),
    description: Joi.string().required(),
    Questions: Joi.array().items(Joi.object({
      text: Joi.string().required(),
      Answers: Joi.array().items(Joi.object({
        text: Joi.string().required(),
        isCorrect: Joi.boolean().required(),
      })).required(),
    }),).required(),
  },
};