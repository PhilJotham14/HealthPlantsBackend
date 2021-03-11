const express = require('express');

const router = express.Router();

//import the conditionController fromthe controllers folder.
const conditionController = require('../controllers/condition.controller');

// Route to retrieve all conditions.
router.get('/', conditionController.findAll);

// Route to create a new condition entry.
router.post('/', conditionController.create);

module.exports = router;