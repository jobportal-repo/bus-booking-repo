import axios from "axios";

// Replace localhost with your Render backend URL
const API = axios.create({
  baseURL: "https://bus-booking-repo.onrender.com"
});

export const getBuses = () => API.get("/buses");
export const getBookings = () => API.get("/bookings");
export const createBooking = (data) => API.post("/bookings", data);
