const changeStamina = (characters)=> {
    const updatedCharacters = characters.map((character)=> {
        if(character.stats.stamina > 50) {
            console.log(character.name + "dont eat");
        }
        if(character.stats.stamina >= 20 && character.stats.stamina <=50 && character.equipment.saddlebag.length >= 1) {
            character.stats.stamina += 1;
            console.log(character.name + "has food and stamina so gets +1");
        }

        if(character.stats.stamina < 20 && character.equipment.saddlebag.length >= 2) {
            character.stats.stamina += 2;
            console.log(character.name + "has food and stamina so gets +2");
        }

        return character;
    })

    return updatedCharacters;
}

module.exports = {changeStamina};