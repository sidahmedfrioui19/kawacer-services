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
    Suggestions: [{
        suggestion1: {
            value: {
                type: String
            },
            correct: {
                type: Boolean
            }
        },
        suggestion2: {
            value: {
                type: String
            },
            correct: {
                type: Boolean
            }
        },
        suggestion3: {
            value: {
                type: String
            },
            correct: {
                type: Boolean
            }
        },
        suggestion4: {
            value: {
                type: String
            },
            correct: {
                type: Boolean
            }
        }
    }]
})

var Question = module.exports = mongoose.model('question', questionSchema)
