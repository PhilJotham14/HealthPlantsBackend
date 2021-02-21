const express = require('express');

const router = express.Router();

//import the userController fromthe controllers folder.
const userController = require('../controllers/user.controller');
const newUser = require('../models/user.model');

// Route to retrieve all user.
router.get('/', userController.findAll);

// Route to create a new user entry.
router.post('/', userController.create);

module.exports = router;