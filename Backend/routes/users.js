const { Router } = require('express');
const db = require('../db/db')
const router = Router();
const {getAllUsers} = require('../controllers/users')
router.get('/api/users',getAllUsers)

module.exports = router