const Character = require("../models/characterModel")

const getAllCharacters = async () => { 
    try
    {
        const characters = await Character.find( );
        let populatedCharacters = [];

        if (characters) {

        populatedCharacters = await Promise.all(characters.map(async (character) => {
            await character.equipment.populate('saddlebag');
            await character.equipment.populate('weapons');
            await character.equipment.pouch.populate('precious_stones');

            return character;
        }))

        }
        
        return populatedCharacters;
    }
    catch (error)
    {
        throw error
    }
};

module.exports = {getAllCharacters};