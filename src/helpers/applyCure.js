const die = require("../helpers/diesApply");

const applyCure = (characters)=> {
    const updatedPlayers = characters.map((character)=> {
        character.stats.strength =+ die.roll(3)
        return character;
    })

    return updatedPlayers;
}

module.exports = {applyCure};