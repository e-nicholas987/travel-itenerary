import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "x-rapidapi-host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
    "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
  },
});

apiClient.interceptors.request.use((config) => {
  return config;
});

export default apiClient;
