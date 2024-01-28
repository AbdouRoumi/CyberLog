const db = require('../db/db');

const editComment = async (req, res) => {
    const { newText } = req.body;
    console.log(newText)
    const [Query] = await db.query('select * from comments WHERE id = ?', [req.params.id]);
    const comment = Query[0];
    if (req.user.userId === 1 || req.user.userId === comment.author_id) {
        // Update the comment in the database
        const query = `
            UPDATE comments SET content = ?
            WHERE id = ?
        `;
        await db.query(query, [req.body.newText, req.params.id]);
        res.redirect(`/posts/${req.params.postid}`);
    } else {
        // User is not authorized to delete the comment
        return res.status(404).render("404");
    }
};

const deleteComment = async (req, res) => {
    const commentId = req.params.commentId;
    const [Query] = await db.query('select * from comments WHERE id = ?', [commentId]);
    const comment = Query[0];
    if (req.user.userId === 1 || req.user.userId === comment.author_id) {
        // Delete the comment from the database
        const result = await db.query('DELETE FROM comments WHERE id = ?', [commentId]);
        if (result.length > 0) {
            res.status(200).redirect('/posts');
        }
    } else {
        // User is not authorized to delete the comment
        return res.status(404).render("404");
    }
};


module.exports = {editComment,deleteComment}