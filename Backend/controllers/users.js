const db = require('../db/db')

const getAllUsers = async(req,res)=>{
    const q = 'SELECT * FROM users'
    db.query(q,(err,data)=>{
        if (err) return res.json(err)
        return res.json(data)

    })
}

module.exports = {getAllUsers}