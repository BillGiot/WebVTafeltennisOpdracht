var mongoose = require('mongoose');

var TeamSchema = new mongoose.Schema({
    name: String,
    players: [{type: mongoose.Schema.Types.ObjectId, ref: 'Player'}],
    club: {type: mongoose.Schema.Types.ObjectId, ref: 'Club'},
    points: {type: Number, default: 0},
});


mongoose.model('Team', NewsItemSchema);