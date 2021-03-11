const express = require('express');

const router = express.Router();

//___________import the comment controller from controllers.
const commentController = require('../controllers/comment.controller');

//________ retrieve all comments
router.get('/', commentController.findAll);

// Route to create a new remedy entry.
router.post('/', commentController.create);

module.exports = router;