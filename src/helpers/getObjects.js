const die = require("../helpers/diesApply");


const getObjects = (characters, rocks) => {
    const charactersChanged = characters.map((character) => {
        
        const dieResult = die.roll(100);

        // Apply conditions based on die result
        if (dieResult <= 30) {
            character.equipment.pouch.gold += 1;
            console.log(character.name + "gets result die" + dieResult + " so gets one gold");
        } else if (dieResult >= 31 && dieResult <= 80) {
            const dieThrow = die.roll(20);
            character.equipment.pouch.coins += dieThrow;
            console.log(character.name + "gets result die" + dieResult + " so gets" + dieResult + "coins");
        } else if (dieResult >= 81 && dieResult <= 100) {
            character.equipment.pouch.precious_stones.push(randomRock(rocks));
            console.log(character.name + "gets result die" + dieResult + " so gets one rock");
        }

        // Return the updated character object
        return character;
    });

    return charactersChanged;
};


const randomRock = (rocks)=> {
    const rockLength = rocks.length;
    const rockIndex = die.roll(rockLength);
    const randomRock = rocks[rockIndex];

    return randomRock;
}


module.exports = {getObjects}