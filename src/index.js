require('../connection');

const BoxModel = require('./box');
const listInventory = BoxModel.find();

exports.listInventory = listInventory;