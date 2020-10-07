const express = require('express')
const router = express.Router()

const quizController = require('../controllers/quizController')

router.get('/', (req, res) => {
    quizController.findAll(res)
})

router.get('/quiz/:query', (req, res) => {
    quizController.find(req.params.query, res)
})

router.get('/paid', (req, res) => {
    quizController.subs(res)
})

router.get('/free', (req, res) => {
    quizController.guest(res)
})

router.get('/:id', (req, res) => {
    quizController.getById(req.params.id, res)
})

router.get('/cat/:id', (req, res) => {
    quizController.getCat(req.params.id, res)
})


module.exports = router
