import express from 'express';
const router = express.Router();

import {
    createOneQuestion,
    deleteOneQuestion,
    getQuestions,
    getOneQuestion,
    updateOneQuestion
} from '../controllers/question.js';

router.route('/questions').get(getQuestions).post(createOneQuestion)
router.route('/questions/:id').get(getOneQuestion).delete(deleteOneQuestion).put(updateOneQuestion)

export default router;