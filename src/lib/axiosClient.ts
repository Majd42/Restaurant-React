import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  timeout: 3000,
});

export default axiosClient;
