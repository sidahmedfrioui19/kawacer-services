const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

require('./config/database.js')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var quizRouter = require('./routes/quizes')
var messageRouter = require('./routes/messages')
var questionRouter = require('./routes/questions')
var authRouter = require('./routes/auth')
var categoriesRouter = require('./routes/categories')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/quizes', quizRouter)
app.use('/messages', messageRouter)
app.use('/questions', questionRouter)
app.use('/auth', authRouter)
app.use('/categories', categoriesRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler


module.exports = app;
