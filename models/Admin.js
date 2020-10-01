const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
})

const Admin = module.exports = mongoose.model('admin', adminSchema)
