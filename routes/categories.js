const express = require('express')
const router = express.Router()

const quizController = require('../controllers/quizController')
const categoryController = require('../controllers/categoryController')

router.get('/', (req, res) => {
    quizController.findAllCat(res)
})

router.get('/:id', (req, res) => {
    categoryController.getByID(req, res)
})

router.get('/delete/:id', (req, res) => {
    categoryController.delete(req, res)
})

router.post('/', (req,res) => {
    categoryController.add(req, res)
})

router.post('/edit/', (req,res) => {
    categoryController.update(req, res)
})

module.exports = router
