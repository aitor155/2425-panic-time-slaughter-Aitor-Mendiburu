const { updateCharacters } = require("../controllers/characterController");

const armChange = (characters) => {
    const updatedCharacters = characters.map((character) => {
        if(characters.equipment.weapons.type === "arcane" && characters.equipment.weapons.quality <= 50) {
            characters.equipment.weapons.quality += 1;
        }
    
        if(characters.equipment.weapons.type === "common" && characters.equipment.weapons.quality >= 0) {
            characters.equipment.weapons.quality -= 1
        }
    
        return character
    })

    return updateCharacters;
    
}

module.exports = (armChange);