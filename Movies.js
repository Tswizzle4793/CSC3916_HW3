var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var MovieSchema = new Schema({
    title: {type: String, required: true},
    year: {type: Number, required: true},
    genre: {type: String, required: true},
    actorOne: { type: Array, required: true},
    actorTwo: { type: Array, required: true},
    actorThree: { type: Array, required: true}

});

module.exports = mongoose.model('Movie', MovieSchema);