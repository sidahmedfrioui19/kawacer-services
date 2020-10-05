var mongoose = require('mongoose')

var qlistSchema = new mongoose.Schema({
    name: {
        type: String
    },
    picture: {
        type: String
    },
    category: {
        type: String
    },
    paid: {
        type: Boolean
    }
})

var Qlist = module.exports = mongoose.model('qlist', qlistSchema)
