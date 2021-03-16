const express = require('express');

const router = express.Router();

//___________import the comment controller from controllers.
const commentController = require('../controllers/comment.controller');

//________ retrieve all comments
router.get('/', commentController.findAll);

// Route to create a new comment
router.post('/', commentController.create);

// ________ get single comment
router.get('/:id', commentController.findById);

// ___________ delete a comment
router.delete('/:id', commentController.delete);

module.exports = router;