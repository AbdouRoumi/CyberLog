const express = require('express')
const db = require('./db/db')
const postsRouter = require('./routes/posts')
const app=express()

const mysql = require("mysql2");

app.use(postsRouter)

app.get('/',(req,res)=>{
    res.json("hello this is the backend")
})

app.get('/users',(req,res)=>{
    const q = 'SELECT * FROM users'
    db.query(q,(err,data)=>{
        if (err) return res.json(err)
        return res.json(data)

    })
})


app.listen(8000,()=>{
    console.log("Connected !! ")
})