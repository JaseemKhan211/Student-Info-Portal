const path = require('path');
const express = require('express');
const cors = require('cors');

const viewRouter = require('./routes/viewRouter');
const studentRouter = require('./routes/studentRouter');

// Start express app
const app = express();

// Set Pug as the template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// 1) GLOBAL MIDDLEWARES
// Implement CORS
app.use(cors());

// To parse JSON bodies
app.use(express.json());

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// 2) ROUTES
app.use('/', viewRouter);
app.use('/api/v1/student', studentRouter);

module.exports = app;