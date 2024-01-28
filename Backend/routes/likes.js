const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likes');

router.post('/like/:post_id', likeController.likePost);
router.post('/unlike/:post_id', likeController.unlikePost);

module.exports = router;
