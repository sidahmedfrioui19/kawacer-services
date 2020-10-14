const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
    senderType: {
        type: String
    },
    tfname: {
        type: String
    },
    tlname: {
        type: String
    },
    sfname: {
        type: String
    },
    slname: {
        type: String
    },
    sname: {
        type: String
    },
    phoneNumber: {
        type: Number
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
    subject: {
        type: String
    }
})

const Message = module.exports = mongoose.model('message', MessageSchema)