import { Question } from '../models/question.js'
import uniqueValidator from 'mongoose-unique-validator';


// Get all questions
const getQuestions = async (req, res) => {
    try {
        const data = await Question.find({})
        res.status(200).json(data)
    } catch (err) {
        console.log(err)
        res.status(404).json({ message: 'something went wrong', error: err })
    }
}

// Get one question
const getOneQuestion = async (req, res) => {
    try {
        const data = await Question.findById(req.params.id)
        if (!data) throw new Error('problem fetching single question from the DB')
        res.status(200).json(data)
    } catch (err) {
        console.log(err)
        res.status(404).json({ message: 'something went wrong', error: err })
    }
}

// Create one question
const createOneQuestion = async (req, res) => {
    try {
        const data = await Question.create(req.body.question)
        res.status(200).json(data)
    } catch (err) {
        console.log(err)
        res.status(404).json({ message: 'cannot create new question', error: err })
    }
}

// Delete one question
const deleteOneQuestion = async (req, res) => {
    try {
        const data = await Question.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'complete' })
    } catch (err) {
        console.log(err)
        res.status(404).json({ message: 'something went wrong', error: err })
    }
}

// Update one question
const updateOneQuestion = async (req, res) => {
    try {
        const data = await Question.findOneAndUpdate(
            req.params.id,
            req.body.question,
            { new: true }
        )
        console.log(!data)
        if (!data) {
            throw new Error()
            res.status(200).json({ message: 'question not found' })
        }
        else {
            res.status(200).json(data)
        }
    } catch (err) {
        console.log(err)
        res.status(404).json({ message: 'something went wrong', error: err  })
    }
}

export { getQuestions, getOneQuestion, createOneQuestion, deleteOneQuestion, updateOneQuestion };