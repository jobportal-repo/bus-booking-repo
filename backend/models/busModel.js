const pool = require("../db");

const Bus = {
  getAll: async () => {
    const res = await pool.query("SELECT * FROM buses");
    return res.rows;
  },
  getById: async (id) => {
    const res = await pool.query("SELECT * FROM buses WHERE id=$1", [id]);
    return res.rows[0];
  }
};

module.exports = Bus;