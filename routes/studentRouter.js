const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

router.post('/register', 
    studentController.uploadStudentPhoto, 
    studentController.createStudent);

router
    .route('/report')
    .get(studentController.getAllStudent);

module.exports = router;
