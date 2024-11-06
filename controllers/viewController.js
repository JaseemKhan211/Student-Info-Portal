const Student = require('../models/studentModel'); 

exports.getRegisterForm = (req, res) => {
    res.status(200).render('register', {
        title: 'Form'
    });
};

exports.getReport = async (req, res) => {
    try{
        const students = await Student.find();
        
        res.status(200).render('report', {
            title: 'Report',
            students
        });
    } catch (err) {
        res.status(500).send("Error fetching student data");
    }
};