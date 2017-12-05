var Album = require('../models/album');
var Track = require('../models/track');
var views = require('../views/album');

exports.show = function(req, res) {
  Album.findById(req.params.id)
  .populate('artist')
  .exec((err, result) => {
    if (err) { res.send(err); }
    Track.find({ album: req.params.id }, (err2, tracks) => {
      if (err2) { res.send(err2); }
      var jsonResponse = views.show(result, tracks);
      res.json(jsonResponse);
    })
  });
};

exports.index = function(req, res) {
  Album.find({})
  .populate('artist')
  .exec((err, result) => {
    if (err) { res.send(err); }
    var jsonResponse = views.index(result);
    res.json(jsonResponse);
  });
};
