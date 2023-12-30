const { Router } = require('express');
const db = require('../db/db')
const router = Router();
const {getAllPosts,getPost,deletePost,addPost,updatePost} = require('../controllers/posts')


router.get('/posts',getAllPosts)
router.get('/posts/:id',getPost)
router.post('/posts/newpost',addPost)
router.delete('/posts/:id',deletePost)
router.put('/posts/:id',updatePost)

module.exports = router