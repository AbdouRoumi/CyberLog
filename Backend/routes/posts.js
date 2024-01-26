const { Router } = require('express');
const db = require('../db/db')
const router = Router();
const {getAllPosts,getPost,deletePost,addPost,updatePost} = require('../controllers/posts')


router.get('/api/posts',getAllPosts)
router.get('/api/posts/:id',getPost)
router.post('/api/posts/newpost',addPost)
router.delete('/api/posts/:id',deletePost)
router.put('/api/posts/:id',updatePost)

module.exports = router