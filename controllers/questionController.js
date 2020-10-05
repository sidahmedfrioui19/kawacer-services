const Question = require('../models/Question')

module.exports.find = (id, res) => {
    Question.find({quiz: id}, (err, data) => {
        console.log(data)
        res.json(data)
    })
}
