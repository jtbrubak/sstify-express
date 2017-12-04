var Playlist = require('../models/playlist');
var views = require('../views/playlist')

exports.show = function(req, res) {
  Playlist.findById(req.params.id)
  .populate('user tracks')
  .exec((err, result) => {
    if (err) { res.send(err); }
    var jsonResponse = views.show(result);
    res.json(jsonResponse);
  });
};

exports.create = function(req, res) {
  var playlist = new Playlist({ title: req.params.title, user: req.params.userId });
  playlist.save((err) => {
    if (err) { res.send(err); }
    res.send(playlist);
  })
};

exports.destroy = function(req, res) {
  var playlist = Playlist.findById(req.params.id);
  playlist.remove((err) => {
    if (err) { res.send(err); }
    res.send(playlist);
  })
};
