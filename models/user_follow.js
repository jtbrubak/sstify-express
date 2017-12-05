var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user');

var UserFollowSchema = new Schema({
    follower: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    followed: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('UserFollow', UserFollowSchema );
