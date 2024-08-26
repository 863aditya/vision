// src/app.js

const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Use the user routes
app.use('/api', userRoutes);

module.exports = app;
