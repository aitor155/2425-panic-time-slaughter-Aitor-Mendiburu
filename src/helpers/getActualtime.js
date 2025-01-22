const getActualTime = (times)=> {

    const lastIndex = times.length - 1;

    const actualTime = times[lastIndex];

    console.log("Today is the day of the number: " + actualTime.day_number + " of " + actualTime.day_week + "with total km of: " + actualTime.km_traveled)

    return actualTime;

}

module.exports = {getActualTime};