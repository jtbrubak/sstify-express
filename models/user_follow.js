var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserFollowSchema = new Schema({
    follower: { type: Schema.Types.ObjectId, ref: 'User' },
    followed: { type: Schema.Types.ObjectId, ref: 'User' }
});

var UserFollow = mongoose.model('UserFollow', UserFollowSchema );
