var views = require('../views/session');
var Application = require('./application');
var User = require('../models/user');

exports.create = function(req, res) {
  var user = User.findByCredentials(req.params.username, req.params.password);
  if (user) {
    Application.login(req, user);
    res.json(user);
  } else {
    res.send('USER NOT FOUND');
  }
};

exports.destroy = function(req, res) {
    res.send('NOT IMPLEMENTED: Author list');
};
