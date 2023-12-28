const db = require('../db/db')

const getAllPosts = async(req,res)=>{
    const q = 'SELECT * FROM posts'
    db.query(q,(err,data)=>{
        if (err) return res.json(err)
        return res.json(data)

    })
}

module.exports = {getAllPosts}