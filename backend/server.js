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
  res.send('Registration endpoint');
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
