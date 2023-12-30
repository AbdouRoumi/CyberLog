const db = require('../db/db')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser');
const e = require('express');
const { use } = require('../routes/posts');
const getAllPosts = async (req, res) => {
    const q = req.query.cat
        ? 'SELECT * FROM posts WHERE cat = ?'
        : 'SELECT * FROM posts';

    db.query(q, [req.query.cat], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
};
const addPost = async (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json('Not Authorized!');

    jwt.verify(token, process.env.JWT_SECRET, (err, userInfo) => {
        if (err) return res.status(403).json('Token is not valid!');
        console.log(userInfo.id)
        const q = 'INSERT INTO posts(`title`, `description`, `img`, `cat`, `date`, `uid`) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [
            req.body.title,
            req.body.description,
            req.body.img,
            req.body.cat,
            req.body.date,
            userInfo.id
        ];

        db.query(q, values, (err, data) => {
            if (err) return res.status(500).json(err);
            return res.json('Post has been created!');
        });
    });
};

const getPost = async(req,res)=>{
    
    const q = 'SELECT p.id,`username`,p.img,u.img,`title`,`date`,`description`,`cat` FROM users u JOIN posts p on u.id=p.uid WHERE p.id = ?'
    db.query(q,[req.params.id],(err,data)=>{

        if (err) return  res.status(500).json(err);
        return res.status(200).json(data[0]);
    });
} 

const updatePost = async (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, process.env.JWT_SECRET, (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        const postId = req.params.id;
        const q = "SELECT uid FROM posts WHERE id = ?";
        
        db.query(q, [postId], (err, data) => {
            if (err) return res.status(500).json(err);

            const postOwnerId = data[0].uid;

            // Check if the post belongs to the user
            if (userInfo.id === postOwnerId) {
                // User owns the post, proceed with the update
                const updateQuery = "UPDATE posts SET `title`=?, `description`=?, `img`=?, `cat`=? WHERE `id` = ?";
                const values = [req.body.title, req.body.description, req.body.img, req.body.cat, postId];

                db.query(updateQuery, values, (err, data) => {
                    if (err) return res.status(500).json(err);
                    return res.json("Post has been updated.");
                });
            } else {
                // User does not own the post
                return res.status(403).json("You can only update your posts!");
            }
        });
    });
};

  const deletePost = async (req, res) => {
    const token = req.cookies.access_token;

    if (!token) return res.status(401).json('Not Authorized!');

    jwt.verify(token, process.env.JWT_SECRET, (err, userInfo) => {
        if (err) return res.status(403).json('Token is not valid!');

        const postId = req.params.id;
        const q = 'DELETE FROM posts WHERE `id`=? and `uid`=?';

        db.query(q, [postId, userInfo.id], (err, data) => {
            if (err) {
                return res.status(500).json(err);
            }

            if (data.affectedRows > 0) {
                // Rows were affected, meaning the post was deleted
                return res.status(200).json('Post deleted!');
            } else {
                // No rows were affected, meaning the post wasn't found or user doesn't have permission
                return res.status(403).json("You can only delete your posts!");
            }
        });
    });
};

module.exports = {getAllPosts,getPost,updatePost,deletePost,addPost}