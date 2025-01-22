const die = require('../helpers/diesApply')
const songs = ["When fire burns within", "A side effect of recovery", "Freddy Merkury", "the real wayward"];

const selectSong = ()=> {
    const lengthSongs = songs.length;
    const randomIndex = die.roll(lengthSongs);
    console.log("get selected this song: " + songs[randomIndex]);
}

module.exports = {selectSong};