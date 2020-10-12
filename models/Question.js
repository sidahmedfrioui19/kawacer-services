var mongoose = require('mongoose')

var questionSchema = new mongoose.Schema({
    quiz: {
        type: String
    },
    value: {
        type: String
    },
    picture: {
        type: String
    },
    a: {
        type: String
    },
    b: {
        type: String
    },
    c: {
        type: String
    },
    d: {
        type: String
    },
    answer: {
        type: String
    }
})

var Question = module.exports = mongoose.model('question', questionSchema)
