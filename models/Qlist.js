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
        type: String
    }
})

qlistSchema.index({'name': 'text', 'category': 'text'});

var Qlist = module.exports = mongoose.model('qlist', qlistSchema)
