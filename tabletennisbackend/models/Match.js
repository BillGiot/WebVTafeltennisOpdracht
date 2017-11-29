var mongoose = require('mongoose');

var MatchSchema = new mongoose.Schema({
    date: Date,
    playerA: String,
    playerB: String,
    setsPlayerA: {type: Number, default: 0},
    setsPlayerB: {type: Number, default: 0}
});


mongoose.model('Match', MatchSchema);
