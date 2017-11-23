var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    club: {type: mongoose.Schema.Types.ObjectId, ref: 'Club'},
    personalRanking: {type:String, default: 'NG'},
    team: {type: mongoose.Schema.Types.ObjectId, ref: 'Team'},
}
);


mongoose.model('Player', NewsItemSchema);