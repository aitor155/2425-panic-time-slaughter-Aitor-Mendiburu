const die = require("../helpers/diesApply");


const getObjects = (characters, rocks)=> {
    charactersChanged = characters.map((character) => {
        dieResult = die.roll(100);
        if(dieResult <= 30) {character.pouch.gold += 1};
        if(dieResult >= 31 && dieResult <= 80) 
            {
                dieThrow = die.roll(20);
                character.pouch.coins += dieThrow;
            }
        if(dieResult >= 81 && dieResult <= 100) {
            character.pouch.precious_stones.push(randomRock(rocks));
        }
    })
}


const randomRock = (rocks)=> {
    const rockLength = rocks.length();
    const rockIndex = roll(rockLength);
    const randomRock = rocks[rockIndex];

    return randomRock;
}


module.exports = {getObjects}