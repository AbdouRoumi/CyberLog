const express = require('express')
require('dotenv').config();

// Use the /upload route
const db = require('./db/db')
const postsRouter = require('./routes/posts')
const usersRouter = require('./routes/users')
const authRouter = require('./routes/auth')
const multer = require('multer')
const cookieParser = require('cookie-parser');
const mysql = require("mysql2");

const app=express()
app.use(express.json())
app.use(cookieParser())
app.use(postsRouter)


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.get('/',(req,res)=>{
    res.json("hello this is the backend")
})
app.use(usersRouter)
app.use(authRouter)


app.listen(8800,()=>{
    console.log("Connected !! ")
})