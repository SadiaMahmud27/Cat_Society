const mongoose =  require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    phone: Number,
    email: String, 
    password: String, 
    address: String,
    nid: String,
    created: {
        type: Date, 
        default: Date.now,
    }
    });

    module.exports = mongoose.model("User", userSchema);