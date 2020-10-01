const User = require('../models/User')

module.exports.findAll = (res) => {
    User.find({}, (err, users) => {
        if (err) throw err
        res.json(users)
    })
}

module.exports.checkIfAdmin = (uid, res) => {
    User.find({ id: uid }, (err, user) => {
        if (user.userType === 'admin') {
            res.json('true')
        } else {
            res.json('false')
        }
    })
}