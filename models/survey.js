import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

//This is to make sure that the survey's are attached to a specific user.

const surveySchema = new mongoose.Schema({
    completedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    answers: [{ questionId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }], answer: String }]
}, {timestamps: true})

surveySchema.plugin(uniqueValidator);

const Survey = mongoose.model('Survey', surveySchema);

export { Survey };



