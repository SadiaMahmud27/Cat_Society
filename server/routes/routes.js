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

//define all the routes
router.get("/", API.fetchAllCat);
router.post("/user/create/:email/:password/:name/:address/:phone/:nid", API.createUser);
router.get("/user/login/:email/:password", API.login);
router.get("/:id", API.fetchCatByID);
router.post("/", upload, API.createCat);
router.patch("/:id", upload, API.updateCat); //patch allows to update record partialy
router.delete("/:id", API.deleteCat);
// router.get("/api.post", API.getAllPost)

module.exports = router;