const express = require("express");
const router = express.Router();
const Bus = require("../models/busModel");

// Get all buses
router.get("/", async (req, res) => {
  const buses = await Bus.getAll();
  res.json(buses);
});

module.exports = router;