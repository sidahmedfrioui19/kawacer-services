const express = require('express')
const router = express.Router()

const questionController = require('../controllers/questionController')

router.get('/:id', (req, res) => {
    questionController.find(req.params.id, res)
})

module.exports = router
