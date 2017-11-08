var User = require('../models/user.js')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db', {
  useMongoClient: true
});
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
var user = new User({username: 'guest', password: 'password'})
user.save(function(err) {
  console.log('FUKK')
});

mongoose.connection.close();
