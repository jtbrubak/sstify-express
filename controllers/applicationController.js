var User = require('../models/user');

exports.currentUser = function(req) {
  User.findOne({ sessionToken: req.session.sessionToken }, (user) => {
    return user;
  });
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
  req.session.sessionToken = user.sessionToken;
}

exports.logout = function(req) {
  User.findOne({ sessionToken: req.session.sessionToken }, (err, user) => {
    user.resetSessionToken();
    req.session.sessionToken = null;
  });
}
