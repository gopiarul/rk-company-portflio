const Contact = require("../models/Contact");

exports.sendMessage = async (req, res) => {
  try {
    const message = new Contact(req.body);
    const saved = await message.save();
    res.json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await Contact.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};