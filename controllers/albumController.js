var Album = require('../models/album');
var views = require('../views/album');

exports.show = function(req, res) {
  Album.findById(req.params.id)
  .populate('artist tracks')
  .exec((err, result) => {
    if (err) { res.send(err); }
    var jsonResponse = views.show(result);
    res.json(jsonResponse);
  });
};

exports.index = function(req, res) {
  Album.find({})
  .populate('artist tracks')
  .exec((err, result) => {
    if (err) { res.send(err); }
    var jsonResponse = views.index(result);
    res.json(jsonResponse);
  });
};
