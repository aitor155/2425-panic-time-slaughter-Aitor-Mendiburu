const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Saddlebag = require('./saddlebagModel');
const Weapon = require('./weaponModel');
const Stone = require('./stoneModel');

const characterSchema = new mongoose.Schema({
    name: String,
    occupation: String,
    description: String,
    stats: Object,
    equipment: {
        saddlebag: [{type: Schema.Types.ObjectId, ref: Saddlebag}],
        quiver: Number,
        weapons: [{type: Schema.Types.ObjectId, ref: Weapon}],
        pouch: {
            coins: Number,
            gold: Number,
            precious_stones: [{type: Schema.Types.ObjectId, ref: Stone}],
            miscellaneous: [String]
        }
    } 
});

module.exports = mongoose.model('Character', characterSchema);