const { Router } = require('express');
const db = require('../db/db')
const router = Router();

router.get('/posts',(req,res)=>{
    const q = 'SELECT * FROM posts'
    db.query(q,(err,data)=>{
        if (err) return res.json(err)
        return res.json(data)

    })
})

module.exports = router