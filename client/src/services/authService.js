import axios from "axios";

const rawBase = import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const API_BASE_URL = rawBase.endsWith("/auth") ? rawBase : `${rawBase.replace(/\/$/, "")}/auth`;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = async (email, password) => {
  const response = await apiClient.post("/login", { email, password });
  return response.data;
};
