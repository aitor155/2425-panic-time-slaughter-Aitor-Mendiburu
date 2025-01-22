const Character = require("../models/characterModel")
const Rock = require("../models/stoneModel");
const helpers = require("../helpers/dayActions");
const timeServices = require("./timeServices");
const { getActualTime } = require("../helpers/getActualtime");

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
            {occupation: type},  
            playerData, 
            { 
                new: true,  // return updated document instead of old one
            }
        );

        //POPULATE
        /////////////////////
            await updatedCharacter.equipment.populate('saddlebag');
            await updatedCharacter.equipment.populate('weapons');
            await updatedCharacter.equipment.pouch.populate('precious_stones');

        /////////////////////
        return updatedCharacter;

    } catch (error) {
        throw error;
    }
};



////MAIN POST CHANGE ///////
const dayEffect = async () => {
    const charactersMongo = await getAllCharacters();
    const characters = charactersMongo.map(character => character.toObject());  //convert to plain JS object
    const stonesMongo = await getAllRocks();
    const stones = stonesMongo.map(stone => stone.toObject());
    const timesMongo = await timeServices.getAllTimes();
    const times = timesMongo.map(time => time.toObject());
    let playersUpdated = await helpers.actionsDay(characters, stones, times);
    
    const playersAffectedDB = await Promise.all(playersUpdated.map(async (player) => {
        return await updateCharacterByType(player.occupation, player);
    }))

    const newTime = await timeServices.createTime(getActualTime(times));

    const response = {
        updatedPlayers: playersAffectedDB,
        times: newTime
    }

    return response;
}


module.exports = {getAllCharacters, getAllRocks, updateCharacterByType, dayEffect};