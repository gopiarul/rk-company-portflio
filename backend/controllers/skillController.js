const Skill = require("../models/Skill");

exports.getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createSkill = async (req, res) => {
  try {
    const skill = new Skill(req.body);
    const saved = await skill.save();
    res.json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};