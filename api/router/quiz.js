const express = require("express");
const router = express.Router();

const gameController = require("../controller/gameController");
const controller = new gameController();

router.get("/getNewGameAnimalEasy", (req, res) => controller.getNewGameAnimalEasy(req, res));
router.post("/creategrid", (req, res) => controller.createGrid(req, res));

module.exports = router;