const { Router } = require('express');
const db = require('../db/db')
const {registerPost,registerGet,loginGet,loginPost,logout} = require('../controllers/auth')

const router = Router();

router.post('/api/auth/register',registerPost);
router.get('/api/auth/register',registerGet)
router.post('/api/auth/login',loginPost);
router.get('/api/auth/login',loginGet);
router.post('/api/auth/logout',logout);
module.exports = router;