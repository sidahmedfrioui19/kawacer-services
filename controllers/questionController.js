const Question = require('../models/Question')

module.exports.find = (id, res) => {
    Question.find({quiz: id}, (err, data) => {
        if(err) throw err
        console.log(id)
        console.log(data)
        res.json(data)
    })
}

module.exports.findQ = (id, res) => {
    Question.findOne({ _id: id }, (err, data) => {
        if(err) throw err
        console.log(id)
        console.log(data)
        res.json(data)
    })
}

module.exports.new = (req, res) => {
    console.log(req.body)
    var newQuestion = new Question({
        quiz: req.body.quiz,
        value: req.body.name,
        picture: req.body.picture,
        suggestion1: {
            value: req.body.suggestion1.value,
            correct: req.body.suggestion1.correct
        },
        suggestion2: {
            value: req.body.suggestion2.value,
            correct: req.body.suggestion2.correct
        },
        suggestion3: {
            value: req.body.suggestion3.value,
            correct: req.body.suggestion3.correct
        },
        suggestion4: {
            value: req.body.suggestion4.value,
            correct: req.body.suggestion4.correct
        }
    })

    newQuestion.save((err) => {
        if (err) throw err
        res.json(newQuestion)
    })
}

module.exports.delete = (id, res) => {
    Question.findOne({ _id: id }, (err, question) => {
        if (err) throw err
        Question.deleteOne({ _id: id }, (err, success) => {
            if (err) throw err
            if (success) {
                Question.find({ quiz: question.quiz }, (err, questions) => {
                    if (err) throw err
                    res.json(questions)
                })
            }
        })
    })
}

module.exports.update = (req, res) => {
    console.log(req.body)
    Question.update({ _id: req.body._id }, req.body, (err, question) => {
        if (err) throw err
        res.json(question)
    })
}