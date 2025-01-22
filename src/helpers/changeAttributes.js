
const changeAttributes = (characters) => {
    return characters.map((character) => {
        console.log("Increasing strength and dexterity of: ", character.name);
        
        character.stats.strength += 2;
        character.stats.dexterity += 2;

        return character;
    });
};

module.exports = {changeAttributes}