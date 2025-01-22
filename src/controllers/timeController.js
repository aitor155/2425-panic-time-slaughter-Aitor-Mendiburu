const timeService = require('../services/timeServices');

const getAllTimes = async (req, res) => {
    try {
        const times = await timeService.getAllTimes();
        if (times.length === 0) {
            return res.status(404).send({message: 'Dont exist times'});
        }
        res.status(200).send({ status: "Ok", data: times})
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({status: "FAILED",
            message: "Error when realising petition",
            data: {error: error?.message || error}
        });
    }
};

module.exports = {getAllTimes}