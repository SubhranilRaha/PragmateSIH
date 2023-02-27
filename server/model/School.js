const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  name: String,
  teachers: { type: [String], default: [] },
  students: { type: [String], default: [] },
});

module.exports.School = mongoose.model("School", schoolSchema);
