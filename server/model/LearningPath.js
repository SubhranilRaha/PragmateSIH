const mongoose = require("mongoose");

const learningPathSchema = new mongoose.Schema({
  classroomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Classroom",
  },
  studentId: mongoose.Schema.Types.ObjectId,
  learningOutcomes: [
    {
      isDone: Boolean,
      name: String,
    },
  ],
  score: Number,
});

module.exports.LearningPath = mongoose.model(
  "learningpath",
  learningPathSchema
);
