const express = require("express");
const router = express.Router();
const API = require("../controllers/api"); 
const multer = require('multer'); //multer for image uploads

//define multer middlerware
let storage = multer.diskStorage({ 
    destination: function (req, file, cb) {
        cb(null, "./uploads"); 
    }, 
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },
});


//difine all the routes
router.get("/", API.fetchAllPost);
router.get("/:id", API.fetchPostByID);
router.post("/", API.createPost);
router.patch("/:id", API.updatePost); //patch allows to update record partialy
router.delete("/:id", API.deletePost);

module.exports = router;