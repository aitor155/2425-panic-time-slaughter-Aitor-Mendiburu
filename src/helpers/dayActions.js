const characterServices = require('../services/characterServices')

applyActions = async () => {
    const characters = await characterServices.getAllCharacters();
    const stones = await characterServices.getAllRocks();
    actionsDay(characters, stones);
}


actionsDay = (characters, stones) => {

    console.log("-------MAÑANA 5:00---------");
    console.log(" ");
    console.log("descansamos y recuperamos")
    changeAttributes(characters);
    getObjects(characters, stones);
    console.log("-------MEDIO DIA 12:00 -----");
    console.log(" ");
    //addKm();
    console.log("-------TARDE 17:00---------");
    console.log(" ");
    //addStamina()
    console.log("------NOCHE 22:00----------");
    console.log(" ");
    selectSong();
    

}