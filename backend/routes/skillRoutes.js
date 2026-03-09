const express = require("express");
const router = express.Router();
const skillController = require("../controllers/skillController");

/* GET skills */
router.get("/", skillController.getSkills);

/* CREATE skill */
router.post("/", skillController.createSkill);

module.exports = router; 