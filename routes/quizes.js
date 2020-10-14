const express = require('express')
const router = express.Router()

const quizController = require('../controllers/quizController')

router.get('/', (req, res) => {
    quizController.findAll(res)
})

router.get('/scores/:user', (req, res) => {
    quizController.getScores(req, res)
})

router.get('/quiz/search/:query', (req, res) => {
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

router.get('/delete/:id', (req, res) => {
    quizController.delete(req.params.id, res)
})

router.post('/', (req, res) => {
    quizController.new(req, res)
})

router.post('/update', (req, res) => {
    quizController.update(req, res)
})

router.post('/score', (req, res) => {
    quizController.setHighScore(req, res)
})

module.exports = router
