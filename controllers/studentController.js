const Student = require('../models/studentModel');
const multer = require('multer');
const path = require('path');

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/img/students')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + Math.round(Math.random() * 1E9) + '.png');
    }
});

// const multerFilter = (req, res, file, cb) => {
//     if(file.mimetype.startsWith('image')){
//         cb(null, true)
//     } else {
//         res.status(400).json({
//             status: 'fail',
//             message: 'Not an image! Please upload only images'
//         });
//     }
// };

const upload = multer({
    storage: multerStorage
});

exports.uploadStudentPhoto = upload.single('photo');

exports.createStudent = async (req, res) => {
    try {

        req.body.photo = req.file ? req.file.path.replace(/\\/g, '/').replace('public/', '') : undefined;

        // ERROR FIND LOG 💥
        // req.body.photo = req.file ? 'img/students/' + req.file.filename : undefined;

        // req.body.photo = req.file ? req.file.path.replace(/\\/g, '/') : undefined;

        // req.body.photo = req.file ? req.file.path : undefined;

        const newStudent = await Student.create(req.body);

        // ERROR FIND LOG 💥
        // console.log('Request File: ', req.file);
        // console.log('Request Body: ', req.body);
        // console.log('Photo: ', req.body.photo);

        res.status(201).json({
            status: 'success',
            data: {
                student: newStudent
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

exports.getAllStudent = async (req, res) => {
    try{
        const students = await Student.find();

        res.status(200).json({
            status: 'success', 
            results: students.length,
            data: {
                students
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};
