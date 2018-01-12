var views = require('../views/session');
var Application = require('./applicationController');
var User = require('../models/user');
var async = require('async');

exports.create = function(req, res) {
  User.findByCredentials(req.body['user[username]'], req.body['user[password]']
, (user) => {
    if (user !== null && user !== undefined) {
      Application.login(req, user);
      res.json(views.show(user));
    } else {
      res.send('USER NOT FOUND');
    }
  });
};

exports.destroy = function(req, res) {
  Application.logout(req);
  res.send(res);
};
