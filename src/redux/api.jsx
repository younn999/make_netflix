import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    Accept: "application/json",
  },
});

export default api;
