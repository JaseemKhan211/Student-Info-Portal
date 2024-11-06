// DOM ELEMENTS
const registerForm = document.querySelector('.form--register');

// DELEGATION
if(registerForm)
    registerForm.addEventListener('submit', e => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('Studentname', document.getElementById('student_name').value);
        formData.append('studentID', document.getElementById('studentID').value);
        formData.append('email', document.getElementById('email').value);
        formData.append('department', document.getElementById('department').value);
        formData.append('photo', document.getElementById('photo').files[0]);

        // ERROR FIND LOG 💥
        // console.log('Form Response: ', formData);

        window.register(formData);
});