const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    name: {
        type: String
    }
})

const Category = module.exports = mongoose.model('Category', categorySchema)
