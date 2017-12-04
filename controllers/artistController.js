var Artist = require('../models/artist');
var views = require('../views/artist');

exports.show = function(req, res) {
  Artist.findById(req.params.id)
  .populate({ path: 'albums', populate: { path: 'tracks' } })
  .exec((err, result) => {
    if (err) { res.send(err); }
    var jsonResponse = views.show(result);
    res.json(jsonResponse);
  });
};

exports.index = function(req, res) {
  Artist.find({})
  .populate('albums tracks')
  .exec((err, result) => {
    if (err) { res.send(err); }
    var jsonResponse = views.index(result);
    res.json(jsonResponse);
  });
};
