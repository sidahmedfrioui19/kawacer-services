const Message = require('../models/Message')

module.exports.sendMessage = (req, res) => {
    let newMessage = new Message({
        senderType: req.body.senderType,
        tfname: req.body.tfname,
        tlname: req.body.tlname,
        sfname: req.body.sfname,
        slname: req.body.slname,
        sname: req.body.sname,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        city: req.body.city,
        state: req.body.state,
        subject: req.body.subject
    })

    newMessage.save((err) => {
        if (err) throw err
        res.json(newMessage)
    })
}

module.exports.getMessages = (req, res) => {
    Message.find({}, (err, messages) => {
        if (err) throw err
        console.log(messages)
        res.json(messages)
    })
}

module.exports.getMessagebyID = (req, res) => {
    Message.findOne({ _id: req.params.id }, (err, message) => {
        if (err) throw err
        res.json(message)
    })
}

module.exports.deleteMessage = (req, res) => {
    Message.deleteOne({ _id: req.params.id }, (err, success) => {
        if (err) throw err;
        if (success) {
            Message.find({}, (err, messages) => {
                if (err) throw err;
                res.json(messages)
            })
        }
    })
}