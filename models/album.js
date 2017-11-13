var aws = require('aws-sdk');
aws.config.loadFromPath('../awsconfig.json');

var moongoose = require('mongoose');

var AlbumSchema = new Schema({
    title: String,
    year: Number,
    image_url: String
});

userSchema.pre('save', function(next) {
  
});

var Album = mongoose.model('Album', AlbumSchema );
