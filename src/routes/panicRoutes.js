const express = require("express");
const router = express.Router();

const characterController = require("../controllers/characterController");
const timeController = require("../controllers/timeController")

router.get("/players", characterController.getAllCharacters);

router.get("/time", timeController.getAllTimes);

router.post("/time", )


module.exports = router;