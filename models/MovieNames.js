const mongoose = require('mongoose');

const MovieNamesSchema = new mongoose.Schema({
movieName : { type:  String, description: "Required Field", required: true },
directorName : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('MovieNames', MovieNamesSchema);