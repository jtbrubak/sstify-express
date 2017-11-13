var User = require('../models/user.js')

var mongoose = require('mongoose');
var mongoDB = 'mongodb://admin:admin@ds151955.mlab.com:51955/sstify';
mongoose.connect(mongoDB);
var db = mongoose.connection;

db.on('connected', function () {
  console.log('SUCCESS');
});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
var user = new User({ username: 'guest', password: 'password' });
user.markModified('object');
user.save(function(err) {
  if (err) {return}
});
