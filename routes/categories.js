const express = require('express')
const router = express.Router()

const quizController = require('../controllers/quizController')
const categoryController = require('../controllers/categoryController')

router.get('/', (req, res) => {
    quizController.findAllCat(res)
})

router.get('/delete/:id', (req, res) => {
    categoryController.delete(req, res)
})

module.exports = router
