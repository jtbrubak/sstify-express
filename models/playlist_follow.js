// Define schema
var Schema = mongoose.Schema;

var PlaylistFollowSchema = new Schema({
    a_string: String,
    a_date: Date
});

// Compile model from schema
var PlaylistFollow = mongoose.model('PlaylistFollow', PlaylistFollowSchema);
