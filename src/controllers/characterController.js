const characterService = require('../services/characterServices');

const getAllCharacters = async (req, res) => {
    try {
        const characters = await characterService.getAllCharacters();
        console.log("los characters: " + characters);
        if (characters.length === 0) {
            return res.status(404).send({message: 'Dont exist characters'});
        }
        res.status(200).send({ status: "Ok", data: characters})
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({status: "FAILED",
            message: "Error when realising petition",
            data: {error: error?.message || error}
        });
    }
};

module.exports = {getAllCharacters}