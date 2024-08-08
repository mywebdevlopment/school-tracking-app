const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const childRoutes = require('./routes/childRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/children', childRoutes);
app.use('/api/notifications', notificationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
