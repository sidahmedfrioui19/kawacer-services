const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    type: {
        type: String,
        default: "normal"
    }
})

var User= module.exports = mongoose.model('user', userSchema)