const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({

})

var User= module.exports = mongoose.model('user', userSchema)