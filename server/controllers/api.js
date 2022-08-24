const Cat = require("../models/cats");
const User = require("../models/users");
module.exports = class API {

    //fetch all cats
static async fetchAllCat(req, res){
    try{
        const cats = await Cat.find();
        res.status(200).json(cats)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}


// fetch cat by ID 
static async fetchCatByID(req, res) {
    const id = req.params.id;
    try{
    const cat = await Cat.findById(id);
    res.status(200).json(cat); 
    } catch (err) {  
    res.status(404).json({ message: err.message })
    }
}


// create a cat 
static async createCat(req, res) {
    const cat = req.body; //get all the body key value pair and assign in cat constant
    const imagename = req.file.filename; 
    cat.image = imagename;
    try { 
        await Cat.create(cat);
        res.status(201).json({ message: "Cat created successfully!"});
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}


// update a cat - can update only title or image
static async updateCat(req, res) {
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
        const newCat = req.body; 
        newCat.image = new_image;

        try {
            await Cat.findByIdAndUpdate(id, newCat);
            res.status(200).json({ message: "Cat updated successfully!" }); 
        } catch (err) {
            res.status(404).json({ message: err.message });
    }    

}

// delete a cat 
static async deleteCat(req, res) {
    const id = req.params.id; 
    const fs = require('fs');
    try {
        const result = await Cat.findByIdAndDelete(id); 
        if (result.image != "") { 
            try {
                fs.unlinkSync("./uploads/" + result.image); 
            } catch (err){
                console.log(err); 
            }
            res.status (200).json({ message: "Cat deleted successfully!"});
            } 
        }catch (err) {
                res.status(404).json({ message: err.message }) ;
                }
            }


// create a user 
static async createUser(req, res) {
    const email = req.params.email;//get all the body key value pair and assign in cat constant
    const password = req.params.password;//get all the body key value pair and assign in cat constant
    const name = req.params.name;//get all the body key value pair and assign in cat constant
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
    const email = req.params.email;//get all the body key value pair and assign in cat constant
    const password = req.params.password;//get all the body key value pair and assign in cat constant
    const user = {email: email, password: password}
    
    try{
    const loggedInUser = await User.findOne(user);
    res.status(200).json(loggedInUser); 
    } catch (err) {  
    res.status(404).json({ message: err.message })
    }
}
    
}

    


