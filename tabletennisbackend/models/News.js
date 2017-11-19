var mongoose = require('mongoose');

var NewsSchema = new mongoose.Schema({
    category: String,
    newsItems: [NewsItem] ,
});
mongoose.model('News', NewsSchema);