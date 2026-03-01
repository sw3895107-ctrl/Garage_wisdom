import axios from "axios";

export const API = axios.create({
  baseURL: "https://backend-lwuu.onrender.com/api",
  headers: { "Content-Type": "application/json" }
});

export const setToken = (token: string | null) => {
  if (token) API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  else delete API.defaults.headers.common["Authorization"];
};
