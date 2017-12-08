var mongoose = require('mongoose');

var MatchSchema = new mongoose.Schema({
    date: Date,
    playerA: String,
    playerB: String,
    setsPlayerA: {type: Number, default: 0},
    setsPlayerB: {type: Number, default: 0}
});

MatchSchema.pre('remove', function (next) {
    this.model('Serie').update({}, { $pull: { matches: this._id } }, { safe: true, multi: true }, next);
});

mongoose.model('Match', MatchSchema);
