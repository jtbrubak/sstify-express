var mongoose = require('mongoose');

var albumSchema = new mongoose.Schema({
    title: String,
    year: Number,
    imageUrl: String
});

module.exports = mongoose.model('Album', albumSchema );
