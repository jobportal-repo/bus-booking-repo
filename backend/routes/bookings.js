const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel");

// Get all bookings
router.get("/", async (req, res) => {
  const bookings = await Booking.getAll();
  res.json(bookings);
});

// Create a booking
router.post("/", async (req, res) => {
  const { bus_id, user_name, seats } = req.body;
  const booking = await Booking.create({ bus_id, user_name, seats });
  res.json(booking);
});

module.exports = router;