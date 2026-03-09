const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

/* SEND contact message */
router.post("/", contactController.sendMessage);

/* GET all messages (admin) */
router.get("/", contactController.getMessages);

module.exports = router;