const mongoose = require("mongoose");

const classroomSchema = new mongoose.Schema({
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'School'
    },
    subject: String,
    learningOutcomes: [ String ],
    teachers: { type: [ String ], default: [] },
    students: { type: [ String ], default: [] }
});

module.exports.Classroom = mongoose.model('Classroom', classroomSchema);