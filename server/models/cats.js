const mongoose =  require('mongoose');

const catSchema = mongoose.Schema({
    name: String, 
    category: String, 
    content: String, 
    image: String, 
    created: {
        type: Date, 
        default: Date.now,
    }
    });
    module.exports = mongoose.model("Cat", catSchema);