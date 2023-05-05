const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const questionSchema = new mongoose.Schema({
    questionText: String,
    possibleAnswers: [String],
    questionLive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

questionSchema.plugin(uniqueValidator);

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;