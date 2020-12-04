var mongoose = require('mongoose')

var connection = 'mongodb+srv://sidahmed:sidahmed19@cluster0.nsbuk.mongodb.net/ecm?retryWrites=true&w=majority'

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
