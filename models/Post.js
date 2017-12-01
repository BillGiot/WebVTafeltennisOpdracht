var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    date: Date,
    user: String,
    text: String,
});


mongoose.model('Post', PostSchema);