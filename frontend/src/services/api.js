import axios from "axios";

const API = axios.create({
  baseURL: "https://employee-ai-backend-rqgc.onrender.com/api",
});


// ADD TOKEN AUTOMATICALLY
API.interceptors.request.use((req) => {

  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;