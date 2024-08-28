// src/app.js

const express = require('express');
const userRoutes = require('./routes/userRoutes');
const profileRoutes = require('./routes/profileRoutes');

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Use the user routes
app.use('/api', userRoutes);
app.use('/dev',profileRoutes);

module.exports = app;
