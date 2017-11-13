// Define schema
var Schema = mongoose.Schema;

var UserFollowSchema = new Schema({
    a_string: String,
    a_date: Date
});

// Compile model from schema
var UserFollow = mongoose.model('UserFollow', UserFollowSchema );
