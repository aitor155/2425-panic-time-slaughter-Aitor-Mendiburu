const changeStamina = (characters)=> {
    characters.map((character)=> {
        if(character.stats.stamina > 50) {
            console.log("dont eat");
        }
        if(character.stats.stamina >= 20 && character.stats.stamina <=50 && character.equipment.saddlebag.length >= 1) {
            character.stats.stamina += 1;
        }

        if(character.stats.stamina < 20 && character.equipment.saddlebag.length >= 2) {
            character.stats.stamina += 2;
        }
    })
}