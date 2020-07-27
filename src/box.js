const mongoose = require('mongoose');

const boxSchema = new mongoose.Schema({
    id: Number,
    name: String,
    items: [{id:Number, name:String, description:String}]
});

const Box = mongoose.model('Box', boxSchema);

module.exports = Box;