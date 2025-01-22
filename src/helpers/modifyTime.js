const die = require('./diesApply');
const mongoose = require('mongoose');

const modifyTime = (lastTime) => {
    // List of days of the week
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    // Increment day_number
    let newDayNumber = lastTime.day_number + 1;

    if(newDayNumber > 7) {
        let index = newDayNumber - 7
        lastTime.day_week = daysOfWeek[newDayNumber - 7];
    }
    else {
        lastTime.day_week = daysOfWeek[newDayNumber];
    }

    lastTime.day_number = newDayNumber;
    lastTime.km_traveled = die.roll(10);
    lastTime.km_total += lastTime.km_traveled;


    //////////////////////
    

    const newObjectId = new mongoose.Types.ObjectId();

    lastTime._id = newObjectId;

return lastTime;

};

module.exports = {modifyTime};