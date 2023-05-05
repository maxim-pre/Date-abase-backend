import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const surveySchema = new mongoose.Schema({
    completedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    answers: { questionId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }], answer: String }
}, {timestamps: true})

surveySchema.plugin(uniqueValidator);

const Survey = mongoose.model('Survey', surveySchema);

export { Survey };



