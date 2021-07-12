import { baseURL } from "../urls";
import axios from "axios";
import cookies from "react-cookies";

const api = axios.create({ baseURL });

api.interceptors.request.use((config) => {
  const token = cookies.load("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) =>
    error.response.status === 401 ? handleLogout() : Promise.reject(error)
);

const handleLogout = () => {
  cookies.remove("token");
  window.location.href = "/login";
};

export default api;
