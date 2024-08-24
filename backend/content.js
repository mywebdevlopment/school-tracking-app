
const express = require('express');
const router = express.Router();
const User = require('./models/User'); // Example User model

// Route to handle registration
router.post('/api/auth/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Perform registration logic, such as saving user to database
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
