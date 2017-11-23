var mongoose = require('mongoose');

var ClubSchema = new mongoose.Schema({
    clubnummer: {type: Number, default: 0},
    street: String,
    number: {type: Number},
    city: String,
    telephone: {type:Number},
    email: String,
    series: [String],
    players: [{type: mongoose.Schema.Types.ObjectId, ref: 'Player'}],
    team: [{type: mongoose.Schema.Types.ObjectId, ref: 'Team'}],
});


mongoose.model('Club', NewsItemSchema);