var mongoose = require('mongoose');

var SerieSchema = new mongoose.Schema({
    name: String,
    matches: [{type: mongoose.Schema.Types.ObjectId, ref: 'Match'}],
});


mongoose.model('Serie', SerieSchema);