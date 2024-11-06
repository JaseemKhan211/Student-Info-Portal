# 🎓 Student Information Portal

Welcome to the **Student Information Portal** - a full-stack application developed as part of my 6th-semester project for the **Mobile & Web Application Development** course! 🚀 This portal allows students to register, upload profile pictures, and view their information in a user-friendly format.

---

## 🌟 Features

- **User Registration**: Students can easily register and upload profile pictures.
- **Photo Uploads**: Multer is used to securely handle profile photo uploads.
- **Real-time Feedback**: Alerts for actions like successful registration and errors.
- **Data Storage**: MongoDB stores all student records in a structured, efficient format.
- **Responsive Design**: A clean, accessible UI with responsive styling.

---

## 🛠️ Technologies Used

### Backend

- **Node.js**: Server-side runtime.
- **MongoDB**: Document database to store student information.

### Frontend

- **Pug**: Template engine for rendering dynamic HTML pages.
- **CSS**: Styling for a responsive and user-friendly interface.

### Packeges

- **Express.js**: Routing and API handling.
- **Mongoose**: ODM for MongoDB with schema-based validation.
- **Multer**: Middleware for managing file uploads.

### Liabries

- **SweetAlert**: Stylish JavaScript pop-up alerts for feedback.

### Architecture

- **MVC**: Implements Model-View-Controller for better code organization and separation of concerns.

---

## 📂 Project Structure

```plaintext

.
├── controllers        # Handles request logic and data processing
├── models             # Mongoose schemas and models
├── views              # Pug templates for the front end
├── routes             # Route definitions for API endpoints
├── public             # Public assets for styling and scripts
│   └── img
│       └── students   # Stores profile photos
│   └── css
│       └── style.css  # Styling
│   └── js
│       ├── index.js       # Main script
│       ├── register.js    # Registration functionality
│       └── sweetAlert.js  # SweetAlert configurations
├── app.js             # Main application setup
├── server.js          # Server configuration
├── config.env         # Environment variables
└── README.md          # Project documentation
```
