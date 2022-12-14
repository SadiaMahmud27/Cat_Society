//main entry file
//imports
require('dotenv').config();
const express = require("express"); 
const mongoose = require("mongoose"); 
const cors = require("cors");
const { router } = require('./routes/routes');
const bodyParser = require('body-parser')


const app = express(); 
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }))
// middlewares 
app.use(cors()); 
app.use(bodyParser.json())
// app.use(express.json); //beacuse it's a json rest API
// app.use(express.urlencoded({ extended: true })); 
app.use(express.static("uploads")); //all the images will be uploded

// database connection 
mongoose.connect(process.env.DB_URI, {
useNewUrlParser: true,
useUnifiedTopology: true,
//useFindAndModify: true,
//useCreateIndex: true
}).then(() => console.log("Connected to Database!"))
.catch((err) => console.log(err));

//routes prefix
app.use("/api/post" , require("./routes/routes"))


//start server
// app.get("/",(req, res) => {res.send("jekonno ekta line")})
app.listen(port, () => console.log(`server running at http://localhost:${port}`));    
    
