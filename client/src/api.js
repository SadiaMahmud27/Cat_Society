import axios from "axios";
const url = "/api/post";

export default class API {

//to get all posts from server 
static async getAllPost() {
    const res = await axios.get(url); 
    return res.data;
}
// to get single post by id 
static async getPostById(id) {
    const res = await axios.get('${url}/${id}'); 
    return res.data;
}
// to insert post into database 
static async addPost(post) {
    const res = await axios.post(url, post); 
    return res.data;
}
// to update post into database 
static async addPost(id, post) {
    const res = await axios.patch('${url}/${id}'); 
    return res.data;
}
// to delete a post
static async deletePost(id) {
    const res = await axios.delete('${url}/${id}'); 
    return res.data;
}
}
