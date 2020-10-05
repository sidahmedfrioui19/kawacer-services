var Qlist = require('../models/Qlist')
var Category = require('../models/Category')

module.exports.findAll = (res) => {
    Qlist.find({}, (err, quizList) => {
        res.json(quizList)
    })
}

module.exports.getCat = (id, res) => {
    Qlist.find({category: id}, (err, quizList) => {
        res.json(quizList)
    })
}

module.exports.findAllCat = (res) => {
    Category.find({}, (err, catList) => {
        if(err) console.log(err)
        res.json(catList)
        console.log(catList)
    })
}

module.exports.getById = (id, res) => {
    Qlist.findById(id, (err, quiz) => {
        res.json(quiz)
    })
}
