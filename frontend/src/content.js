// frontend/src/content.js

// Example: JavaScript code to handle frontend logic
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');

    registerForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(registerForm);
        const data = Object.fromEntries(formData);



        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error('Network response was not ok');

            const result = await response.json();
            console.log('Registration successful:', result);
        } catch (error) {
            console.error('Error registering:', error);
        }
    });
});
