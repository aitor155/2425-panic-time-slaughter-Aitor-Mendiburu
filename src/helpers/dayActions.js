const characterServices = require('../services/characterServices');
const attributes = require('./changeAttributes');
const armChange = require('./armChange');
const objects = require('./getObjects');
const songs = require('./selectSong');
const stamina = require('./changeStamina');
const arm = require('./armChange');
const cure = require('./applyCure');
const time = require('./getActualtime');
const km = require('./addKM');
const { json } = require('express');



const actionsDay = (characters, stones, times) => {

    let pruebas = [];
    time.getActualTime(times);
    console.log("-------MAÑANA 5:00---------");
    console.log(" ");
    characters = attributes.changeAttributes(characters); 
    characters = objects.getObjects(characters, stones);
    console.log("-------MEDIO DIA 12:00 -----");
    console.log(" ");
    km.addKm();
    console.log("-------TARDE 17:00---------");
    console.log(" ");
    //addStamina(); //////////////////
    console.log("------NOCHE 22:00----------");
    console.log(" ");
    songs.selectSong();
    characters = stamina.changeStamina(characters);
    prueba = arm.armChange(characters);
    console.log("aqui si : " + prueba);
    characters = cure.applyCure(characters);
    console.log("------DESCANSO NEXT DAY-------")

    return characters;
}

module.exports = {actionsDay};