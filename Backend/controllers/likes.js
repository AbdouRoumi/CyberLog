const db = require('../db/db');

const likePost = async (req, res) => {
    try {
        const user_id = req.user.userId;
        const post_id = req.params.post_id;
        await db.query('INSERT INTO likes (user_id, post_id) VALUES (?, ?)', [user_id, post_id]);
        res.redirect(`/posts/${post_id}`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const unlikePost = async (req, res) => {
    try {
        const user_id = req.user.userId;
        const post_id = req.params.post_id;
        await db.query('DELETE FROM likes WHERE user_id = ? AND post_id = ?', [user_id, post_id]);
        res.redirect(`/posts/${post_id}`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};


module.exports={unlikePost,likePost}