const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    Studentname: {
        type: String,
        required: [true, 'A student must have a name'],
    },
    studentID: {
        type: String,
        required: [true, 'A student must have an ID'],
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'A student must have an email'],
        unique: true,
    },
    department: {
        type: String,
        required: [true, 'A student must have a department'],
    },
    photo: {
        type: String,
        default: 'default.jpg', 
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
