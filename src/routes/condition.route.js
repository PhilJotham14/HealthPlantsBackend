const express = require('express');

const router = express.Router();

//import the plantController fromthe controllers folder.
const conditionController = require('../controllers/condition.controller');
const newCondition = require('../models/condition.model');

// Route to retrieve all conditions.
router.get('/', conditionController.findAll);

// Route to create a new condition entry.
router.post('/', conditionController.create);

module.exports = router;