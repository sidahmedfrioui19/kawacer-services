const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController.js')

/* GET users listing. */
router.get('/', (req, res) => {
  userController.findAll(res)
})

router.get('/search/:query', (req, res) => {
  userController.findUser(req.params.query, res);
})

router.get('/delete/:id', (req, res) => {
  userController.delete(req.params.id, res)
})

router.post('/update', (req, res) => {
  var userData = req.body;
  userController.update(userData, res)
})

router.post('/add', (req, res) => {
  var user = req.body;
  userController.create(user, res)
})

router.post('/login', (req, res) => {
  
})

router.get('/logout', (req, res) => {

})

module.exports = router
