import axios from "axios";

// Create an Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // Set the base URL for your API
  timeout: 10000, // Set a timeout (optional)
});

export default axiosInstance;
