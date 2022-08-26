import axios from "axios";
const url = "http://localhost:5000/api/post";

export default class API {

//to get all posts from server 
static async getAllPost() {
    const res = await axios.get(url);
    return res.data;
}
// to get single post by id 
static async getPostById(id) {
    const res = await axios.get(`${url}/${id}`); 
    return res.data;
}
// to insert post into database 
static async addPost(post) { 
    const res = await axios.post(url, post); 
    return res.data;
}
// to update post into database 
static async updatePost(id, post) {
    const res = await axios.patch(`${url}/${id}`,post); 
    return res.data;
}
// to delete a post
static async deletePost(id) {
    const res = await axios.delete(`${url}/${id}`); 
    return res.data;
}
// signup
static async signup(path) {
    const res = await axios.post(`${url}/user/create/${path}`); 
    return res.data;
}
// signup
static async adoptCat(cat) {
    const res = await axios.post(`${url}/adopt`, cat); 
    return res.data;
}
// signup
static async getAdoptedCats() {
    const res = await axios.get(`${url}/adopt`); 
    return res.data;
}
// signup
static async search(query) {
    const res = await axios.get(`${url}/search/${query}`); 
    return res.data;
}
}
