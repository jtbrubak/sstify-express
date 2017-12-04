var User = require('../models/user');

exports.show = function(response) {
  return {
    username: response.username,
    id: response._id
  }
}
