const { Router } = require("express");
const { newStudentController, newTeacherController } = require('../controller/newAccController')
const router = Router();

router.post('/student', newStudentController)
router.post('/teacher', newTeacherController);

module.exports.newAccApi = router;