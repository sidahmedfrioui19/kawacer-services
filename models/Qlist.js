var mongoose = require('mongoose')

var qlistSchema = new mongoose.Schema({
    name: {
        type: String
    },
    thumbnail: {
        type: String
    },
    questions: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    },
    paid: {
        type: Boolean
    }
})

var Qlist = module.exports = mongoose.model('qlist', qlistSchema)