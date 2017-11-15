var mongoose = require('mongoose');

var trackSchema = new mongoose.Schema({
    title: String
});

module.exports = mongoose.model('Track', trackSchema );
