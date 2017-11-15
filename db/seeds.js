var User = require('../models/user.js')
var Album = require('../models/album.js')

var mongoose = require('mongoose');
var mongoDB = 'mongodb://admin:admin@ds151955.mlab.com:51955/sstify';
mongoose.connect(mongoDB);
var db = mongoose.connection;

db.on('connected', function () {
  console.log('SUCCESS');
});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
var album = new Album({ title: 'Damaged', year: 1982, imageUrl: 'https://s3.amazonaws.com/sstify-dev/seeds/albums/damaged.jpg' });
album.markModified('object');
album.save(function(err) {
  if (err) {return}
});
