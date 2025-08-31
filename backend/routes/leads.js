const express = require("express");
const Lead = require("../models/Lead");
const router = express.Router();

// Get all leads
router.get("/", async (req, res) => {
  const leads = await Lead.find();
  res.json(leads);
});

// Create a new lead
router.post("/", async (req, res) => {
  const lead = new Lead(req.body);
  await lead.save();
  res.status(201).json(lead);
});

module.exports = router;