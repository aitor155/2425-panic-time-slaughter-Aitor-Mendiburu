


const roll= (faces)=> {
    let max = faces
    let min = 1
    let random = 0;
    // for (let i = 0; i < quantity; ++i){
        random += Math.floor(Math.random() * (max - min + 1)) + min;
    // }
    return random;
}

module.exports = {roll};