const Time = require("../models/timeModel")
const time = require("../helpers/modifyTime");

const getAllTimes = async () => { 
    try
    {
        const allTimes = Time.find( );
        
        return allTimes;
    }
    catch (error)
    {
        throw error
    }
};

const createTime = async (actualTime) => {
    try {
        const newTime = time.modifyTime(actualTime);
        const createTime = new Time(newTime); 

        await createTime.save();  

        return newTime;

    } catch (error) {

        throw error; 
    }
};

module.exports = {getAllTimes, createTime};