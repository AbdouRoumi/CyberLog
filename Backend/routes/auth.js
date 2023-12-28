const { Router } = require('express');
const db = require('../db/db')
const {registerPost,registerGet,loginGet,loginPost,logout} = require('../controllers/auth')

const router = Router();

router.post('/register',registerPost);
router.get('/register',registerGet)
router.post('/login',loginPost);
router.get('/login',loginGet);
//router.post('/logout',logout);
module.exports = router;