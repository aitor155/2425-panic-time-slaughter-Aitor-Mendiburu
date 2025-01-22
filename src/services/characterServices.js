const Character = require("../models/characterModel")
const Rock = require("../models/stoneModel");
const helpers = require("../helpers/dayActions");

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


const getAllRocks = async () => {
    const allRocks = await Rock.find();
    return allRocks;
}

const updateCharacterByType = async (type, playerData) => {
    try {
        const updatedCharacter = await Character.findOneAndUpdate(
            type,  
            playerData, 
            { 
                new: true,  // return updated document instead of old one
            }
        );
        return updatedCharacter;
    } catch (error) {
        throw error;
    }
};



////MAIN POST CHANGE ///////
const dayEffect = async () => {
    const characters = await getAllCharacters();
    const stones = await getAllRocks();
    let playersUpdated = actionsDay(characters, stones);
    let updatedCharacter = [];
    
    const playersAffected = playersUpdated.map(async (player) => {
        updatedCharacter = await updateCharacterByType({occupation: player.occupation})
        return updatedCharacter;
    })

    const response = {
        updatedPlayers: playersAffected,
        times: ""
    }

    return response
}


module.exports = {getAllCharacters, getAllRocks, updateCharacterByType};