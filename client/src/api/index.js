import axios from 'axios';
const API = axios.create({ baseURL : 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    } return req;
});

// Post
export const fetchPosts = () => API.get('/posts');
export const createPost = (newPosts) => API.post('/posts', newPosts);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}` , updatedPost);
export const deletePost = (id, deletedPost) => API.delete(`/posts/${id}`, deletedPost); 
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

//Auth
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);