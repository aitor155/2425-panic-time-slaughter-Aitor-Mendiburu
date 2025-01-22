
const changeAttributes = (characters) => {
    const changedCharacters = characters.map((character) => {
        character.stats.strength += 2;
        character.stats.dexterity += 2;
    })

    return changedCharacters;
}

module.exports = {changeAttributes}