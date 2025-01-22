const characterService = require('../services/characterServices');

const getAllCharacters = async (req, res) => {
    try {
        const characters = await characterService.getAllCharacters();
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


const updateCharacters = async (req, res) => { //by filter

    try {
        const updatedCharacters = await characterService.dayEffect();

        if (!updatedCharacters) {
            return res
                .status(404)
                .send({ status: "FAILED",
                        data: { error: "Can't find updatedCharacter" } });
        }

        res.status(200).send({ status: "OK", data: updatedCharacters });

    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED",
                message: "Error al realizar la peticion:",
                data: { error: error?.message || error } });

    }
}

module.exports = {getAllCharacters, updateCharacters}