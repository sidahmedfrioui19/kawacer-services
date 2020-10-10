const express = require('express')
const router = express.Router()

const questionController = require('../controllers/questionController')

router.get('/:id', (req, res) => {
    questionController.find(req.params.id, res)
})

router.get('/edit/:id', (req, res) => {
    questionController.findQ(req.params.id, res)
})

router.get('/delete/:id', (req, res) => {
    questionController.delete(req.params.id, res)
})

router.post('/', (req, res) => {
    questionController.new(req, res)
})

router.post('/update', (req, res) => {
    questionController.update(req, res)
})

module.exports = router
