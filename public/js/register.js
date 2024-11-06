const register = async (formData) => {
    try{
        const res = await axios({
            method: 'POST',
            url: 'http://127.0.0.1:3000/api/v1/student/register',
            data: formData
        });

        // ERROR FIND LOG 💥
        // console.log('Axios response: ', res.data);

        if (res.data.status === 'success') {
            window.sweetAlert();

            window.setTimeout(() => {
              location.assign('/report');
            }, 1500);
          }
    } catch (err) {

        // ERROR FIND LOG 💥
        // console.error('Error Response:', err.response.data.message);

        Swal.fire({
            title: 'Error',
            text: err.response ? err.response.data.message : 'An unknown error occurred',
            icon: 'error',
        });
    }
};

// Make `register` globally available
window.register = register;