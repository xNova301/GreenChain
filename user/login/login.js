document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get form values
        const usernameOrEmail = document.querySelector('input[name="username"]').value;
        const password = document.querySelector('input[name="password"]').value;

        try {
            // Fetch the stored user data from the MockAPI
            const response = await fetch('https://662caade0547cdcde9ded95c.mockapi.io/account/taikhoan');
            if (response.ok) {
                const users = await response.json();

                // Check if the username/email and password match any user
                const user = users.find(user =>
                    (user.username === usernameOrEmail || user.email === usernameOrEmail) && user.password === password
                );

                if (user) {
                    // Login successful
                    alert('Login successful!');
                    // Save the username to localStorage
                    localStorage.setItem('loggedInUser', user.username);
                    // Redirect to a dashboard or another page
                    window.location.href = '../dashboard'; // Change this to your desired page
                } else {
                    // Login failed
                    alert('Invalid username/email or password.');
                }
            } else {
                alert('Failed to retrieve user data.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while logging in.');
        }
    });
});
