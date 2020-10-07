var mongoose = require('mongoose')

var qlistSchema = new mongoose.Schema({
    name: {
        type: String,
        es_indexed:true
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

qlistSchema.index({'$**': 'text'});

var Qlist = module.exports = mongoose.model('qlist', qlistSchema)
