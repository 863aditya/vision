// src/app.js

const express = require('express');
const userRoutes = require('./routes/userRoutes');
const profileRoutes = require('./routes/profileRoutes');
const routes = require('./routes/routes')

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Use the user routes
// app.use('/api', userRoutes);
// app.use('/dev',profileRoutes);
app.use('/api',routes)

module.exports = app;
