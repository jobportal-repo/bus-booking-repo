const pool = require("../db");

const Booking = {
  create: async ({ bus_id, user_name, seats }) => {
    const res = await pool.query(
      "INSERT INTO bookings (bus_id, user_name, seats) VALUES ($1, $2, $3) RETURNING *",
      [bus_id, user_name, seats]
    );
    return res.rows[0];
  },
  getAll: async () => {
    const res = await pool.query("SELECT * FROM bookings");
    return res.rows;
  }
};

module.exports = Booking;