import { Question } from '../models/question.js'
import uniqueValidator from 'mongoose-unique-validator';


// Get all questions
const getQuestions = async (req, res) => {
    try {
        const data = await Question.find()
        res.status(200).json(data)
    } catch (err) {
        console.log(err)
        res.status(404).json({ message: 'something went wrong' })
    }
}

// Get one question
const getOneQuestion = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Question.findById(id).populate('comments')
        if (!data) throw new Error('problem fetching single question from the DB')
        res.status(200).json(data)
    } catch (err) {
        console.log(err)
        res.status(404).json({ message: 'something went wrong' })
    }
}

// Create one question
const createOneQuestion = async (req, res) => {
    try {
        const data = await Question.create(req.body)
        res.status(200).json(data)
    } catch (err) {
        console.log(err)
        res.status(404).json({ message: 'cannot create new question' })
    }
}

// Delete one question
const deleteOneQuestion = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Question.findByIdAndDelete(id)
        res.status(200).json({ message: 'complete' })
    } catch (err) {
        console.log(err)
        res.status(404).json({ message: 'something went wrong' })
    }
}

// Update one question
const updateOneQuestion = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Question.findOneAndUpdate(
            { _id: id },
            { ...req.body },
            { new: true }
        )
        if (!data) throw new Error()
        res.status(200).json({ message: 'question not found' })
    } catch (err) {
        console.log(err)
        res.status(404).json({ message: 'something went wrong' })
    }
}

export { getQuestions, getOneQuestion, createOneQuestion, deleteOneQuestion, updateOneQuestion };