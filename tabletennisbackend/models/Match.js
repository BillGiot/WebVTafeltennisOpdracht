var mongoose = require('mongoose');

var MatchSchema = new Mongoose.MatchSchema({
 date: Date,
 week: {type: Number, default: 1},
 home: {type: mongoose.Schema.Types.ObjectId, ref: 'Team'},
 visitors: {type: mongoose.Schema.Types.ObjectId, ref: 'Team'},
 pointsHome: {type: Number, default: 0},
 pointsHome: {type: Number, default: 0}

});

mongoose.model('Match', MatchSchema);

