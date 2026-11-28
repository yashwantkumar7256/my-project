import axios from "axios";

const api = axios.create({
  baseURL: "https://my-project-1-m8fm.onrender.com",
  withCredentials: true,
});

export default api;
