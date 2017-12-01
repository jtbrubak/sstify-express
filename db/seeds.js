var User = require('../models/user.js');
var Album = require('../models/album.js');
var Track = require('../models/track.js');
var Artist = require('../models/artist.js')
var async = require('async');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://admin:admin@ds151955.mlab.com:51955/sstify';
mongoose.connect(mongoDB);
var db = mongoose.connection;

db.on('connected', function () {
  console.log('SUCCESS');
});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

function addUser() {
  var user = new User({ username: 'guest', password: 'password' });
  user.markModified('object');
  user.save(function(err) {
    if (err) { return; }
  });
}

function addArtist(name, thumbUrl, bannerUrl) {
  var artist = new Artist({ name, thumbUrl, bannerUrl });
  artist.markModified('object');
  artist.save(function(err) {
    if (err) { return; }
  });
}

function addAlbum(title, year, imageUrl) {
  var album = new Album({ title, year, imageUrl });
  album.markModified('object');
  album.save(function(err) {
    if (err) { return; }
  });
}

function addTrack(title) {
  var track = new Track({ title });
  track.markModified('object');
  track.save(function(err) {
    if (err) { return; }
  });
}
