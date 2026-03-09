const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceController");

/* GET services */
router.get("/", serviceController.getServices);

/* CREATE service */
router.post("/", serviceController.createService);

module.exports = router;