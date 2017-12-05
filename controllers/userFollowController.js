var User = require('../models/user');
var UserFollow = require('../models/user_follow');

exports.create = function(req, res) {
  var userFollow = new UserFollow({
    follower: req.query.follower,
    followed: req.query.followed });
  userFollow.save((err) => {
    if (err) { res.send(err); }
    res.send('CREATED');
  })
};

exports.destroy = function(req, res) {
  var userFollow = UserFollow.findById(req.params.id);
  userFollow.remove((err) => {
    if (err) { res.send(err); }
    res.send('DELETED');
  })
};
