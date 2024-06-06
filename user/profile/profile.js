
        document.addEventListener('DOMContentLoaded', function () {
            // Check if userData exists in localStorage
            const storedUserData = localStorage.getItem('userData');
            if (storedUserData) {
                const userData = JSON.parse(storedUserData);

                // Populate the form with the stored data
                document.querySelector('input[name="firstname"]').value = userData.firstName || '';
                document.querySelector('input[name="lastname"]').value = userData.lastName || '';
                document.querySelector('input[name="state"]').value = userData.state || '';
                document.querySelector('input[name="city"]').value = userData.city || '';
                document.querySelector('input[name="zip"]').value = userData.zip || '';
                document.querySelector('input[name="address"]').value = userData.address || '';
            }

            // Form submission handler
            document.querySelector('form').addEventListener('submit', function (event) {
                event.preventDefault(); // Prevent the form from submitting

                // Get form values
                const firstName = document.querySelector('input[name="firstname"]').value;
                const lastName = document.querySelector('input[name="lastname"]').value;
                const state = document.querySelector('input[name="state"]').value;
                const city = document.querySelector('input[name="city"]').value;
                const zip = document.querySelector('input[name="zip"]').value;
                const address = document.querySelector('input[name="address"]').value;

                // Create an object to store user data
                const userData = {
                    firstName,
                    lastName,
                    state,
                    city,
                    zip,
                    address
                };

                // Save the object to localStorage
                localStorage.setItem('userData', JSON.stringify(userData));

                alert('User data saved to localStorage.');
            });
        });
    