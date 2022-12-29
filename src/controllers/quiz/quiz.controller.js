import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import axios from 'axios';
import { Quiz, Question, Answer } from '../../models';
import { successResponse, errorResponse, uniqueId } from '../../helpers';

export const index = async (req, res) => {
  try {
    const page = req.params.page || 1;
    const limit = 2;
    const quizzes = await Quiz.findAndCountAll({
      order: [['createdAt', 'DESC'], ['name', 'ASC']],
      offset: (page - 1) * limit,
      limit,
    });
    return successResponse(req, res, { quizzes });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const get = async (req, res) => {
  try {
    const param = { ...req.body, ...req.params, ...req.query };

    const quiz = await Quiz.findOne({ 
      where: { id: param.id }, 
      include: [{ 
        model: Question,
        as: 'questions',
        include: [{ 
          model: Answer, as: 'answers'}] 
        }] 
      });

    if (!quiz) return errorResponse(req, res, DATA_DOES_NOT_EXIST, 400);

    return successResponse(req, res, quiz);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const create = async (req, res) => {
  try {
    const user = req.user;
    const { name, description, questions } = req.body;
    const payload = {
      userId: user.id,
      name,
      description,
      questions
    };

    //validate stuff
    if (payload.questions.length < 4) throw new Error("Minimum number of questions is - 4")
    if (payload.questions.length > 20) throw new Error("Maximum number of questions is - 20")
    payload.questions.forEach((question, i) => {
      if (question.answers.length < 2 || question.answers.length > 4) throw new Error("Number of answers to a question must be between 2-4")
      if (!question.answers.find(answer => answer.isCorrect)) throw new Error("Question has no correct answer")
    });


    // all good, so create quiz, ez
    const newQuiz = await Quiz.create(payload, {
      include: [{ model: Question, as: 'questions', include: [{ model: Answer, as: 'answers' }] }]
    });
    return successResponse(req, res, newQuiz);

  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};


export const update = async (req, res) => {
  return errorResponse(req, res, 'Not implemented yet c:');
};

export const destroy = async (req, res) => {
  return errorResponse(req, res, 'Not implemented yet c:');
};