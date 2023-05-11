import express from 'express';
const router = express.Router();

import {
    createOneQuestion,
    deleteOneQuestion,
    getQuestions,
    getOneQuestion,
    updateOneQuestion
} from '../controllers/questionController.js';

router.route('/api/questions').get(getQuestions).post(createOneQuestion)
router.route('/api/questions/:id').get(getOneQuestion).delete(deleteOneQuestion).put(updateOneQuestion)

export default router;