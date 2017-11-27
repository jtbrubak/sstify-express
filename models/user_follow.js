// Define schema
var Schema = mongoose.Schema;

var UserFollowSchema = new Schema({
    follower: { type: Schema.Types.ObjectId, ref: 'User' },
    followed: { type: Schema.Types.ObjectId, ref: 'User' }
});

// Compile model from schema
var UserFollow = mongoose.model('UserFollow', UserFollowSchema );
