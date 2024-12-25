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

- [![Node.js][Node.js-badge]][Node.js-url]  
- [![MongoDB][MongoDB-badge]][MongoDB-url]  
- [![Mongoose][Mongoose-badge]][Mongoose-url]  
- [![Express.js][Express.js-badge]][Express.js-url]  
- [![Multer][Multer-badge]][Multer-url]  
- [![SweetAlert][SweetAlert-badge]][SweetAlert-url]  
- [![Pug][Pug-badge]][Pug-url]  
- [![CSS][CSS-badge]][CSS-url]  

[Node.js-badge]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white  
[Node.js-url]: https://nodejs.org/  

[MongoDB-badge]: https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white  
[MongoDB-url]: https://www.mongodb.com/  

[Mongoose-badge]: https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logoColor=white  
[Mongoose-url]: https://mongoosejs.com/  

[Express.js-badge]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white  
[Express.js-url]: https://expressjs.com/  

[Multer-badge]: https://img.shields.io/badge/Multer-FF6F00?style=for-the-badge  
[Multer-url]: https://github.com/expressjs/multer  

[SweetAlert-badge]: https://img.shields.io/badge/SweetAlert-FF1493?style=for-the-badge  
[SweetAlert-url]: https://sweetalert.js.org/  

[Pug-badge]: https://img.shields.io/badge/Pug-E3C29B?style=for-the-badge&logo=pug&logoColor=black  
[Pug-url]: https://pugjs.org/  

[CSS-badge]: https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white  
[CSS-url]: https://developer.mozilla.org/en-US/docs/Web/CSS

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
