const User = require('../models/User')

module.exports.findAll = (res) => {
    User.find({ type: 'normal' }, (err, users) => {
        if (err) throw err
        res.json(users)
    })
}

module.exports.getAdmin = (req, res) => {
    User.findOne({ type: 'admin' }, (err, user) => {
        if (err) throw err
        res.json(user)
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

module.exports.delete = (id, res) => {
    User.deleteOne({ _id: id }, (err, success) => {
        if (err) throw err;
        if (success) {
            User.find({}, (err, users) => {
                if (err) throw err;
                res.json(users)
            })
        }
    })
}

module.exports.create = (user, res) => {
    var newUser = new User({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
        city: user.city,
        state: user.state,
    })

    newUser.save((err) => {
        if (err) throw err;
        res.json(newUser)
    })
}

module.exports.findbyID = (req, res) => {
    User.findOne({ _id: req.params.id }, (err, user) => {
        console.log(user)
        if (err) throw err
        res.json(user)
    })
}

module.exports.update = (req, res) => {
    console.log(req.body)
    User.update({ _id: req.body._id }, req.body, (err, user) => {
        if (err) throw err;
        res.json(user)
    })
}