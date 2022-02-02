import axios from 'axios';
const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPosts) => axios.post(url, newPosts);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}` , updatedPost);
export const deletePost = (id, deletedPost) => axios.delete(`${url}/${id}`, deletedPost); 
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);