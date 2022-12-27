import { text } from 'body-parser';

const Joi = require('joi');

export const findById = {
  body: {
    id: Joi.number().required(),
  },
};

export const createQuiz = {
  body: {
    name: Joi.string().required(),
    description: Joi.string().required(),
    questions: Joi.array().items(Joi.object({
      questionText: Joi.string().required(),
      answers: Joi.array().items(Joi.object({
        answerText: Joi.string().required(),
        isCorrect: Joi.boolean().required(),
      })).required(),
    }),).required(),
  },
};