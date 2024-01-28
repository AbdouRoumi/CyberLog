const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comments');

router.post('/edit-comment/:postid/:id', commentController.editComment);
router.delete('/delete-comment/:commentId', commentController.deleteComment);

module.exports = router;
