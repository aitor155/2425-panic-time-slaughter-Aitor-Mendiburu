

const armChange = (characters) => {
    const updatedCharacters = characters.map((character) => {
        
        if (character.equipment.weapons.length >= 0) {
            if(character.equipment.weapons.type === "arcane" && character.equipment.weapons.quality <= 50) {
                character.equipment.weapons.quality += 1;
                console.log(character.name + " weapon is of type arcane so gains +1")
            }
        
            if(character.equipment.weapons.type === "common" && character.equipment.weapons.quality >= 0) {
                character.equipment.weapons.quality -= 1
                console.log(character.name + " weapon is of type common so gains +1")
            }
        }
        
        return character
    })

    return updatedCharacters;
    
    
}

module.exports = {armChange};