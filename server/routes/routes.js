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

let upload = multer({
 storage: storage,
}).single("image");

//difine all the routes
router.get("/", API.fetchAllPost);
router.post("/user/create/:email/:password/:name", API.createUser);
router.get("/user/login/:email/:password", API.login);
router.get("/:id", API.fetchPostByID);
router.post("/", upload, API.createPost);
router.patch("/:id", upload, API.updatePost); //patch allows to update record partialy
router.delete("/:id", API.deletePost);


module.exports = router;