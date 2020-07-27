//const json = require('../assets/data.json');
require('../connection');
const BoxModel = require('./box');

// const listInventory = new Promise((resolve, reject) =>  BoxModel.find((err, result) =>  err ? reject(err) : resolve(result)));

const listInventory = BoxModel.find();

const addBox = async (boxes) => await boxes.map((box) =>  new BoxModel(box).save((err) => err ? err : ""));

const removeBox = async (boxId) => await BoxModel.deleteOne({"id":boxId},(err) => err ? err : "" ); 

const editBox = (box) => {
    deleteBox(box.id);
    addBox(box);
};

exports.listInventory = listInventory;
exports.addBox = addBox;
exports.removeBox = removeBox;
exports.editBox = editBox;