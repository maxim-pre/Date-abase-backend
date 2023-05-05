import { Survey } from '../models/survey.js'
import uniqueValidator from 'mongoose-unique-validator';


// Get all surveys
const getSurveys = async (req, res) => {
    try {
        const data = await Survey.find({})
        res.status(200).json(data)
    } catch (err) {
        console.log(err)
        res.status(404).json({ message: 'something went wrong', error: err })
    }
}

// Get one survey
const getOneSurvey = async (req, res) => {
    try {
        const data = await Survey.findById(req.params.id)
        if (!data) throw new Error('problem fetching single survey from the DB')
        res.status(200).json(data)
    } catch (err) {
        console.log(err)
        res.status(404).json({ message: 'something went wrong', error: err })
    }
}

// Create one survey
const createOneSurvey = async (req, res) => {
    try {
        const data = await Survey.create(req.body.survey)
        res.status(200).json(data)
    } catch (err) {
        console.log(err)
        res.status(404).json({ message: 'cannot create new survey', error: err })
    }
}

// Delete one survey
const deleteOneSurvey = async (req, res) => {
    try {
        const data = await Survey.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'complete' })
    } catch (err) {
        console.log(err)
        res.status(404).json({ message: 'something went wrong', error: err })
    }
}

// Update one survey
const updateOneSurvey = async (req, res) => {
    try {
        const data = await Survey.findOneAndUpdate(
            req.params.id,
            req.body.survey,
            { new: true }
        )
        console.log(!data)
        if (!data) {
            throw new Error()
            res.status(200).json({ message: 'survey not found' })
        }
        else {
            res.status(200).json(data)
        }
    } catch (err) {
        console.log(err)
        res.status(404).json({ message: 'something went wrong', error: err  })
    }
}

export { getSurveys, getOneSurvey, createOneSurvey, deleteOneSurvey, updateOneSurvey };