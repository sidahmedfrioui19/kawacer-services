var express = require('express')
var router = express.Router()

var users = require('./users')
var quizes = require('./quizes')
var questions = require('./questions')
var messages = require('./messages')

var jsonInfo = require('../package.json')

const listEndpoints = require('express-list-endpoints')

var usersRoutes = listEndpoints(users)
var quizRoutes = listEndpoints(quizes)
var questionRoutes = listEndpoints(questions)
var messageRoutes = listEndpoints(messages)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
              { 
                title: jsonInfo.appname,
                appVersion: jsonInfo.appversion,
                UsersRoutes: usersRoutes,
                quizRoutes: quizRoutes,
                questionRoutes: questionRoutes,
                messageRoutes: messageRoutes
              }
            )
})

module.exports = router
