const mongoose = require('mongoose')

const ScoreSchema = mongoose.Schema({
    score: {
        type: String
    },
    questions: {
        type: String
    },
    quiz: {
        type: String
    },
    user: {
        type: Array
    }
})

const Score = module.exports = mongoose.model('score', ScoreSchema)