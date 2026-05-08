import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const getBuses = () => API.get("/buses");
export const getBookings = () => API.get("/bookings");
export const createBooking = (data) => API.post("/bookings", data);