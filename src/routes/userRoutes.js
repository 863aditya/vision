const express = require('express');
const { createUser, getAllUsers } = require('../controllers/userController');

const router = express.Router();

// Route for creating a new user
router.post('/users', createUser);

// Route for getting all users
router.get('/users', getAllUsers);

module.exports = router;
