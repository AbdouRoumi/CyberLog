const { Router } = require('express');
const db = require('../db/db')
const router = Router();
const {getAllPosts} = require('../controllers/posts')
router.get('/posts',getAllPosts)

module.exports = router