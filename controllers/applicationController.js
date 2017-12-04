var User = require('../models/user');

exports.currentUser = function(req) {
  var user = User.find({ sessionToken: req.session.sessionToken });
  return user;
}

exports.logged_in = function() {
  var user = currentUser();
  if (user) {
    return true;
  } else {
    return false;
  }
}

exports.login = function(req, user) {
  user.resetSessionToken();
  req.session.sessionToken = req.user.sessionToken;
}

exports.logout = function(req) {
  currentUser().resetSessionToken();
  req.session.sessionToken = null;
}
