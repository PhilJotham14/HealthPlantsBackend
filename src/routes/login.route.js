const express = require('express');

const router = express.Router();

//import the conditionController fromthe controllers folder.
const loginController = require('../controllers/login.controller');

// Route to retrieve all conditions.
// router.get('/', conditionController.findAll);

// Route to create a new condition entry.
router.post('/', loginController.login);

module.exports = router;