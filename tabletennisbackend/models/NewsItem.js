var mongoose = require('mongoose');

var NewsItemSchema = new mongoose.Schema({
    title: String,
    description: String,
    text: String,
});


mongoose.model('NewsItem', NewsItemSchema);