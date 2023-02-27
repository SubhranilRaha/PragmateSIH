const mongoose = require("mongoose");

const cocurrSchema = new mongoose.Schema({
    name: String,
    description: String,
    studentId: mongoose.Schema.Types.ObjectId
});

module.exports.CoCurricular = mongoose.model('Cocurricular', cocurrSchema);