import axios from "axios";

const axiosClient = axios.create({
  // baseURL: import.meta.env.VITE_BASE_API_URL,
  baseURL: "https://stg.tdh.start-tech.ae/api",
  timeout: 30000,
});

export default axiosClient;
