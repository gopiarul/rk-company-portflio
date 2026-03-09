const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* REGISTER ADMIN */
exports.registerAdmin = async (req, res) => {

  const { email, password } = req.body;

  const existingAdmin = await Admin.findOne({ email });

  if (existingAdmin) {
    return res.status(400).json({ message: "Admin already exists" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const admin = new Admin({
    email,
    password: hashedPassword
  });

  await admin.save();

  res.json({
    message: "Admin registered successfully"
  });

};


/* LOGIN ADMIN */
exports.loginAdmin = async (req, res) => {

  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });

  if (!admin) {
    return res.status(400).json({ message: "Admin not found" });
  }

  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Invalid password" });
  }

  const token = jwt.sign(
    { id: admin._id },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({
    message: "Login successful",
    token
  });

};