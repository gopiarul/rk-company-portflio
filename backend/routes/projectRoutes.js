const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const auth = require("../middleware/auth");

/* GET all projects */
/**
 * @swagger
 * /api/projects:
 *   get:
 *     summary: Get all projects
 *     responses:
 *       200:
 *         description: List of projects
 */
router.get("/", projectController.getProjects);

/* CREATE project */
router.post("/", projectController.createProject);

/* DELETE project */
router.delete("/:id", projectController.deleteProject);
router.post("/", auth, projectController.createProject);
router.delete("/:id", auth, projectController.deleteProject);

module.exports = router;