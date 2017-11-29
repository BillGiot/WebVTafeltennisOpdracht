var mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema({
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
});


mongoose.model('Blog', BlogSchema);