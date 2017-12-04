var User = require('../models/user');
var views = require('../views/user');

exports.show = function(req, res) {
  User.findById(req.params.id)
  .populate('playlists followedPlaylists followedUsers')
  .exec((err, result) => {
    if (err) { res.send(err); }
    var jsonResponse = views.show(result);
    res.json(jsonResponse);
  });
};

exports.create = function(req, res) {
  var user = new User({ username: req.params.username, password: req.params.password });
  user.save((err) => {
    if (err) { res.send(err); }
    res.send(user);
  })
};
