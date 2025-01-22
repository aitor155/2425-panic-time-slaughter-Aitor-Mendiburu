const Time = require("../models/timeModel")

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

module.exports = {getAllTimes};