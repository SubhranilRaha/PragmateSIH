const { Classroom } = require("../model/ClassRoom");
const { Teacher } = require("../model/Teacher");
const { Student } = require("../model/Student");
const { LearningPath } = require("../model/LearningPath");
const { User } = require("../model/User");

const createClassroom = async(req,res) => {
    if(req?.user?.userType != "School"){
        return res.status(401).json({message : "Access Denied"})
    }
    const { subject , learningOutcomes } = req.body;
    
    const newClassroom = await Classroom.create({ 
        subject: subject,
        learningOutcomes: learningOutcomes,
        school: req.user.userInfo._id
    });
    res.status(200).json({ newClassroom: newClassroom });
}

const addTeacher = async(req , res) =>{
    if(req?.user?.userType != "School"){
        return res.status(401).json({message : "Access Denied"})
    }
    const {classroomId , teacherId} = req.body;
    let classroom = await Classroom.findOne({ 
        school: req.user.userInfo._id,
        _id : classroomId
    });
    let teachers = classroom?.teachers;
    if(teachers?.includes(teacherId) == false){
        teachers.push(teacherId);
    }
    classroom.teachers = teachers;
    console.log(teacherId);
    let teacherData = await Teacher.findById(teacherId);
    let classrooms = teacherData?.classRooms;
    if(classrooms?.includes(classroomId) == false){
        classrooms.push(classroomId);
    }
    teacherData.classRooms = classrooms;
    await Classroom.findByIdAndUpdate({_id:classroomId}, classroom);
    await Teacher.findByIdAndUpdate({_id:teacherId}, teacherData);
    return res.status(200).json(classroom);
}
const addStudent = async(req , res) =>{
    if(req?.user?.userType != "School"){
        return res.status(401).json({message : "Access Denied"})
    }
    const {classroomId , studentId} = req.body;
    let classroom = await Classroom.findOne({ 
        school: req.user.userInfo._id,
        _id : classroomId
    });
    let students = classroom?.students;
    if(students?.includes(studentId) == false){
        const learningOutcomes = classroom.learningOutcomes.map((lo) => {
            return { name: lo, isDone: false }
        });
        students.push(studentId);
        const newLearningPath = await LearningPath.create({ 
            classroomId,
            studentId,
            learningOutcomes,
            score: 0
        });
    }
    classroom.students = students;
    let studentData = await Student.findById(studentId);
    let classrooms = studentData?.classRooms;
    if(classrooms?.includes(classroomId) == false){
        classrooms.push(classroomId);
    }
    studentData.classRooms = classrooms;
    await Classroom.findByIdAndUpdate({_id:classroomId}, classroom);
    await Student.findByIdAndUpdate({_id:studentId}, studentData);
    return res.status(200).json(classroom);

}

const getClassroom = async(req,res) => {
    if(req?.user?.userType != "School"){
        return res.status(401).json({message : "Access Denied"})
    }
    const classroom = await Classroom.find({ 
        school: req.user.userInfo._id
    });
    return res.status(200).json(classroom);
}

const getTeacher = async(req,res) => {
    if(req?.user?.userType != "School"){
        return res.status(401).json({message : "Access Denied"})
    }
    const teachers = await Teacher.find({ 
        school: req.user.userInfo._id
    });
    for(let i=0; i<teachers.length; i++)
    {
        const teacherUser = await User.findOne({ userInfo: teachers[i]._id });
        teachers[i]._id = teacherUser;
    }
    return res.status(200).json(teachers);
}

const getStudent = async(req,res) => {
    if(req?.user?.userType != "School"){
        return res.status(401).json({message : "Access Denied"})
    }
    const students = await Student.find({ 
        school: req.user.userInfo._id
    });
    for(let i=0; i<students.length; i++)
    {
        const studentUser = await User.findOne({ userInfo: students[i]._id });
        students[i]._id = studentUser;
    }
    return res.status(200).json(students);
}

module.exports.createClassroom = createClassroom;
module.exports.addTeacher = addTeacher;
module.exports.addStudent = addStudent;
module.exports.getTeacher = getTeacher;
module.exports.getClassroom = getClassroom;
module.exports.getStudent = getStudent;