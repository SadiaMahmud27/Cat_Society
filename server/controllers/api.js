const Post = require("../models/posts");
const User = require("../models/users");
module.exports = class API {

    //fetch all posts
static async fetchAllPost(req, res){
    try{
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}


// fetch post by ID 
static async fetchPostByID(req, res) {
    const id = req.params.id;
    try{
    const post = await Post.findById(id);
    res.status(200).json(post); 
    } catch (err) {  
    res.status(404).json({ message: err.message })
    }
}


// create a post 
static async createPost(req, res) {
    const post = req.body; //get all the body key value pair and assign in post constant
    const imagename = req.file.filename; 
    post.image = imagename;
    try { 
        await Post.create(post);
        res.status(201).json({ message: "Post created successfully!"});
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}


// update a post - can update only title or image
static async updatePost(req, res) {
    const id = req.params.id; 
    let new_image = ""; 
    if (req.file) { 
        new_image = req.file.filename; //will get the file name from multer middleware
        try {
            fs.unlinkSync("./uploads/" + req.body.old_image); //first remove the old image, then upload the new image on that place in the directory
        } catch (err) {
            console.log(err);
        } 
    } else {
        new_image = req.body.old_image;
        }
        const newPost = req.body; 
        newPost.image = new_image;

        try {
            await Post.findByIdAndUpdate(id, newPost);
            res.status(200).json({ message: "Post updated successfully!" }); 
        } catch (err) {
            res.status(404).json({ message: err.message });
    }    

}

// delete a post 
static async deletePost(req, res) {
    const id = req.params.id; 
    try {
        const result = await Post.findByIdAndDelete(id); 
        if (result.image != "") { 
            try {
                fs.unlinkSync("./uploads/" + result.image); 
            } catch (err){
                console.log(err); 
            }
            res.status (200).json({ message: "Post deleted successfully!"});
            } 
        }catch (err) {
                res.status(404).json({ message: err.message }) ;
                }
            }


// create a user 
static async createUser(req, res) {
    const email = req.params.email;//get all the body key value pair and assign in post constant
    const password = req.params.password;//get all the body key value pair and assign in post constant
    const name = req.params.name;//get all the body key value pair and assign in post constant
    const user = {email: email, password: password, name: name}
    console.log(user);
    try { 
        await User.create(user);
        res.status(201).json({ message: "User created successfully!"});
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

static async login(req, res) {
    const email = req.params.email;//get all the body key value pair and assign in post constant
    const password = req.params.password;//get all the body key value pair and assign in post constant
    const user = {email: email, password: password}
    
    try{
    const loggedInUser = await User.findOne(user);
    res.status(200).json(loggedInUser); 
    } catch (err) {  
    res.status(404).json({ message: err.message })
    }
}
    
}

    


