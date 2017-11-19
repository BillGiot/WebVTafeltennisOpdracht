var mongoose = require('mongoose');

var NewsItemSchema = new mongoose.Schema({
    title: String,
    text: String,
});
mongoose.model('NewsItem', NewsItemSchema);