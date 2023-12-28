const express = require('express')
const db = require('./db/db')
const postsRouter = require('./routes/posts')
const usersRouter = require('./routes/users')
const authRouter = require('./routes/auth')
const app=express()
app.use(express.json())
const mysql = require("mysql2");

app.use(postsRouter)

app.get('/',(req,res)=>{
    res.json("hello this is the backend")
})

app.use(usersRouter)
app.use(authRouter)


app.listen(8000,()=>{
    console.log("Connected !! ")
})