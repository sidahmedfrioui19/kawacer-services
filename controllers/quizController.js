var Qlist = require('../models/Qlist')

module.exports.findAll = (res) => {
    Qlist.find({}, (err, quizList) => {
        res.json(quizList)
    })
}

module.exports.getById = (id, res) => {
    Qlist.findById(id, (err, quiz) => {
        res.json(quiz)
    })
}