const express = require("express");
const router = express.Router();

// POST /contact
router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill all fields." });
  }

  console.log("Contact Form Data:", { name, email, message });

  // 👉 Optionally save to DB or send to email
  res.status(200).json({ success: true, message: "Message received!" });
});

module.exports = router;
