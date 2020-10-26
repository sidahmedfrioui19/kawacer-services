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
        type: String,
        default: '1'
    },
    b: {
        type: String,
        default: '2'
    },
    c: {
        type: String,
        default: '3'
    },
    d: {
        type: String,
        default: '4'
    },
    answer: {
        type: String
    }
})

var Question = module.exports = mongoose.model('question', questionSchema)
