var Qlist = require('../models/Qlist')
var Category = require('../models/Category')
var Score = require('../models/Score')

module.exports.findAll = (res) => {
    Qlist.find({}, (err, quizList) => {
        if (err) throw err;
        res.json(quizList)
    })
}

module.exports.getScores = (req, res) => {
    Score.find({ user : req.params.user }, (err, scoreList) => {
        if (err) throw err;
        res.json(scoreList)
        console.log(scoreList)
    })
}

module.exports.subs = (res) => {
    Qlist.find({ paid: "true" }, (err, quizList) => {
        if (err) throw err;
        res.json(quizList)
    })
}

module.exports.guest = (res) => {
    Qlist.find({ paid: "false" }, (err, quizList) => {
        if (err) throw err;
        res.json(quizList)
    })
}

module.exports.find = (q, res) => {
    if(q === undefined || q === '') {
        res.json({})
    } else {
        Qlist.find({ $text: { $search: q }}, (err, quizList) => {
            if (err) throw err
            res.json(quizList)
        })
    }
}

module.exports.getCat = (id, res) => {
    Qlist.findOne({category: id}, (err, quizList) => {
        if (err) throw err;
        console.log(quizList)
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
        if (err) throw err;
        res.json(quiz)
    })
}

module.exports.new = (req, res) => {
    console.log(req.body)
    var Quiz = new Qlist({
        name: req.body.name,
        picture: req.body.picture,
        category: req.body.category,
        paid: req.body.paid
    })

    Quiz.save((err) => {
        if (err) throw err;
        res.json(Quiz)
    })
}

module.exports.delete = (id, res) => {
    Qlist.deleteOne({ _id: id }, (err, success) => {
        if (err) throw err;
        if (success) {
            Qlist.find({}, (err, quizes) => {
                if (err) throw err;
                res.json(quizes)
            })
        }
    })
}

module.exports.update = (req, res) => {
    console.log(req.body)
    Qlist.update({ _id: req.body._id }, req.body, (err, quiz) => {
        if (err) throw err;
        res.json(quiz)
    })
}

module.exports.setHighScore = (req, res) => {
    var highScore = new Score({
        score: req.body.score,
        questions: req.body.questions,
        quiz: req.body.quiz,
        user: req.body.user,
        picture: req.body.picture,
        quizid: req.body.quizid
    })

    highScore.save((err) => {
        if (err) throw err;
        res.json(highScore)
    })
}