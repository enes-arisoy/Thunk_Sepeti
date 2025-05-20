import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3044/",
});

export default api;
