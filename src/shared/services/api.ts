import axios, { AxiosResponse, AxiosError } from "axios";

const api = axios.create({
  baseURL: "https://api.example.com", // Replace with your API base URL
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      console.error("Response error:", error.response.data);
    } else if (error.request) {
      console.error("Request error:", error.request);
    } else {
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  },
);

export const getStatus = async (): Promise<AxiosResponse> => {
  return api.get("/status");
};

export default api;
