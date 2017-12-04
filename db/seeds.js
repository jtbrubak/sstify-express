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

function addAlbum(title, year, imageUrl, artistName) {
  var album = new Album({ title, year, imageUrl });
  Artist.findOne({ 'name': artistName }, (err, result) => {
    if (err) { return; }
    album.artist = result._id;
    album.markModified('object');
    album.save((err) => {
      if (err) { return; }
      result.albums.push(album._id);
      result.save((err) => {
        console.log('SAVED');
      });
    });
  });
}

function addTrack(title, audioUrl) {
  var track = new Track({ title, audioUrl });
  track.markModified('object');
  track.save(function(err) {
    if (err) { return; }
  });
}

// addUser();
// addArtist('Black Flag', 'https://s3.amazonaws.com/sstify-pro/artists/images/000/000/019/thumb/black_flag.jpg', 'https://s3.amazonaws.com/sstify-pro/artists/images/000/000/019/banner/black_flag.jpg');
// addAlbum('Damaged', 1983, 'https://s3.amazonaws.com/sstify-dev/seeds/albums/damaged.jpg', 'Black Flag');
addTrack('Rise Above', 'https://s3.amazonaws.com/sstify-dev/seeds/tracks/Damaged/01+rise+above.mp3');
