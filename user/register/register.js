document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get form values
        const firstName = document.querySelector('input[name="firstname"]').value;
        const lastName = document.querySelector('input[name="lastname"]').value;
        const username = document.querySelector('input[name="username"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const country = document.querySelector('select[name="country"]').value;
        const mobileCode = document.querySelector('input[name="mobile_code"]').value;
        const mobile = document.querySelector('input[name="mobile"]').value;
        const password = document.querySelector('input[name="password"]').value;
        const passwordConfirmation = document.querySelector('input[name="password_confirmation"]').value;
        const agree = document.querySelector('input[name="agree"]').checked;

        // Check if passwords match
        if (password !== passwordConfirmation) {
            alert('Passwords do not match.');
            return;
        }

        // Check if agree checkbox is checked
        if (!agree) {
            alert('You must agree to the terms and conditions.');
            return;
        }

        // Create an object to store user data
        const userData = {
            firstName,
            lastName,
            username,
            email,
            country,
            mobileCode,
            mobile,
            password
        };

        try {
            const response = await fetch('https://662caade0547cdcde9ded95c.mockapi.io/account/taikhoan', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                alert('User data saved successfully.');
                // Optionally, you can redirect the user to another page after saving the data
                // window.location.href = 'success.html';
            } else {
                alert('Failed to save user data.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while saving user data.');
        }
    });
});
