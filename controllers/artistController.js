var Artist = require('../models/artist');
var Album = require('../models/album');
var Track = require('../models/track');
var views = require('../views/artist');

exports.show = function(req, res) {
  Artist.findById(req.params.id)
  .exec((err, result) => {
    if (err) { res.send(err); }
    Album.find({ artist: req.params.id }, (err2, albums) => {
      if (err2) { res.send(err); }
      Track.find({ album: albums[0]._id })
      .populate('album')
      .exec((err3, tracks) => {
        if (err3) { res.send(err); }
        var jsonResponse = views.show(result, albums, tracks);
        res.json(jsonResponse);
      })
    })
  });
};

exports.index = function(req, res) {
  Artist.find({}, (err, artists) => {
    if (err) { res.send(err); }
    res.json(views.index(artists));
  });
};
