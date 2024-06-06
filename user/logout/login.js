document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get form values
        const usernameOrEmail = document.querySelector('input[name="username"]').value;
        const password = document.querySelector('input[name="password"]').value;

        // Retrieve stored user data from localStorage
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);

            // Check if the username/email and password match
            if ((userData.username === usernameOrEmail || userData.email === usernameOrEmail) && userData.password === password) {
                // Login successful
                alert('Login successful!');
                // Save the username to localStorage
                localStorage.setItem('loggedInUser', userData.username);
                // Redirect to a dashboard or another page
                window.location.href = '../dashboard'; // Change this to your desired page
            } else {
                // Login failed
                alert('Invalid username/email or password.');
            }
        } else {
            // No user data found
            alert('No user data found. Please register first.');
        }
    });
});
