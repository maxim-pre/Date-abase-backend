import express from 'express';
const router = express.Router();

import {
    createOneSurvey,
    deleteOneSurvey,
    getSurveys,
    getOneSurvey,
    updateOneSurvey
} from '../controllers/surveyController.js';

router.route('/api/surveys').get(getSurveys).post(createOneSurvey)
router.route('/api/surveys/:id').get(getOneSurvey).delete(deleteOneSurvey).put(updateOneSurvey)

export default router;