import React, { useEffect, useState } from "react";
import { getBuses } from "../api/api";
import BookingForm from "./BookingForm";

const BusList = () => {
  const [buses, setBuses] = useState([]);
  const [selectedBus, setSelectedBus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const res = await getBuses();
        setBuses(res.data || []);
      } catch (err) {
        console.error("Error fetching buses:", err);
        setError("Failed to load buses.");
      } finally {
        setLoading(false);
      }
    };
    fetchBuses();
  }, []);

  if (loading) return <p>Loading buses...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h3>Available Buses</h3>
      {buses.length === 0 ? (
        <p>No buses available.</p>
      ) : (
        <ul>
          {buses.map((bus) => (
            <li key={bus.id}>
              <strong>{bus.name}</strong> - {bus.source} to {bus.destination} at {bus.time} - Seats Available: {bus.seats_available}
              <button onClick={() => setSelectedBus(bus)} style={{ marginLeft: "1rem" }}>Book</button>
            </li>
          ))}
        </ul>
      )}

      {selectedBus && <BookingForm bus={selectedBus} onClose={() => setSelectedBus(null)} />}
    </div>
  );
};

export default BusList;