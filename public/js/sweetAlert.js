const sweetAlert = () => {
    Swal.fire({
        title: "Registered!",
        timer: 9800,
        width: 450,
        text: "Student registration has been stored successfully 😊🚀.",
        icon: "success"
    });
};

// Make `sweetAlert` globally available
window.sweetAlert = sweetAlert;