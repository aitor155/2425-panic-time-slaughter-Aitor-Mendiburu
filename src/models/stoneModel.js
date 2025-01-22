const mongoose = require('mongoose');

const stoneSchema = new mongoose.Schema({
    name: String,
    description: String,
    value: Number,
});

module.exports = mongoose.model('Precious_stone', stoneSchema);