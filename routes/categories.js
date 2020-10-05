const express = require('express')
const router = express.Router()

const quizController = require('../controllers/quizController')

router.get('/', (req, res) => {
    quizController.findAllCat(res)
})

module.exports = router
