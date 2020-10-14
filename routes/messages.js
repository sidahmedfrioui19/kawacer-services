const express = require('express')
const router = express.Router()

const messageController = require('../controllers/messageController')

router.get('/', (req, res) => {
    messageController.getMessages(req, res)
})

router.get('/:id', (req, res) => {
    messageController.getMessagebyID(req, res)
})

router.get('/delete/:id', (req, res) => {
    messageController.deleteMessage(req, res)
})

router.post('/', (req, res) => {
    messageController.sendMessage(req, res)
})

module.exports = router