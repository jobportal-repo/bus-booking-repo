import React, { useState } from "react";
import { createBooking } from "../api/api";

const BookingForm = ({ bus, onClose }) => {
  const [userName, setUserName] = useState("");
  const [seats, setSeats] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createBooking({ bus_id: bus.id, user_name: userName, seats });
    alert("Booking Successful!");
    onClose();
  };

  return (
    <div style={{ border: "1px solid #333", padding: "1rem", marginTop: "1rem" }}>
      <h4>Book {bus.name}</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <input
          type="number"
          min="1"
          max={bus.seats_available}
          value={seats}
          onChange={(e) => setSeats(Number(e.target.value))}
          required
        />
        <button type="submit">Book</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default BookingForm;