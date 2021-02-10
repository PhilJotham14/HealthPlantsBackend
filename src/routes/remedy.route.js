const express = require('express');

const router = express.Router();

//import the remedyController fromthe controllers folder.
const remedyController = require('../controllers/remedy.controller');
const newRemedy = require('../models/remedy.model');

// Route to retrieve all remedies.
router.get('/', remedyController.findAll);

// Route to create a new remedy entry.
router.post('/', remedyController.create);

module.exports = router;