const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

// Initialize app
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(cors());
const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/school-tracking-app';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log('MongoDB connection error:', err));
require('dotenv').config();

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/children', require('./routes/childRoutes'));
app.use('/api/notifications', require('./routes/notificationRoutes'));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Server is running');
});


app.post('/api/auth/register', (req, res) => {
  // Registration logic here
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create and save new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    try {
      await newUser.save();
      res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  });
  res.send('Registration endpoint');
});


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
