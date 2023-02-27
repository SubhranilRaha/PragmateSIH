const { Router } = require("express");
const { createClassroom, getClassroom, getTeacher, getStudent, addTeacher, addStudent } = require("../controller/schoolController");

const router = Router();

router.get('/classroom', getClassroom);
router.get('/teacher', getTeacher);
router.get('/student', getStudent);
router.post('/createClassroom', createClassroom);
router.post('/classroom/addTeacher', addTeacher);
router.post('/classroom/addStudent', addStudent);
// In case of fail there will be 401 status code with a string response 'Unauthorised'

module.exports.schoolApi = router;