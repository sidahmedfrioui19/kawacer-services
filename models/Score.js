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
    picture: {
        type: String
    },
    user: {
        type: String
    },
    quizid: {
        type: String
    }
})

const Score = module.exports = mongoose.model('score', ScoreSchema)