const { Post } = require('../models');

const getAllPosts = async () => {
  return await Post.findAll({
    order: [['id', 'DESC']]
  });
};

const getPostById = async (id) => {
  return await Post.findByPk(id);
};

const createPost = async (postData) => {
  return await Post.create(postData);
};

const updatePost = async (id, postData) => {
  const post = await Post.findByPk(id);
  if (post) {
    await post.update(postData);
    return post;
  }
  return null;
};

const deletePost = async (id) => {
  const post = await Post.findByPk(id);
  if (post) {
    await post.destroy();
    return true;
  }
  return false;
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
