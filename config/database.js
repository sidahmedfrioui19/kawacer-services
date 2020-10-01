var mongoose = require('mongoose')

var connection = 'mongodb://sidahmed:sidahmed19@ds259347.mlab.com:59347/ecm'

mongoose.connect(connection, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, (err, success) => {
  console.log('Connecting to mongodb url: ' + connection)
  setTimeout(() => {
    if(err) {
      console.log("Error: can't connect to mongodb")
    }
    if(success){
      console.log('Connected to mongodb');
    }
  },2000, 'Connecting')
})
