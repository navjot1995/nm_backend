const { Post } = require('../models/post.js');

const getPost = async (req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.id })
        res.send(post);
    } catch (error) {
        console.log(error);
        res.end(error.message);
    }
}

const getAllPost = async (req, res) => {
    try {
        const result = await Post.find()
        res.send(result);
    } catch (error) {
        console.log(error);
        res.end(error.message);
    }
}

const addPost = async (req, res) => {
    try {
        const { post, description } = req.body
        const createpost = new Post();
        createpost.post = post;
        createpost.description = description;
        createpost.save()
        res.send({ success: true });
    } catch (error) {
        console.log(error);
        res.end(error.message);
    }
}

const updatePost = async (req, res) => {
    try {
        const result = await Post.findOneAndUpdate(
            { _id: req.body.postId }, {
            post: req.body.post,
            description: req.body.description
        }, {
            new: true
        })
        res.send(result);

    } catch (error) {
        console.log(error);
        res.end(error.message);
    }
}

const deletePost = async (req, res) => {
    try {
        const result = await Post.deleteOne( { _id: req.params.id })
        res.send(result);

    } catch (error) {
        console.log(error);
        res.end(error.message);
    }
}


module.exports = {
    getPost,
    getAllPost,
    addPost,
    updatePost,
    deletePost
};