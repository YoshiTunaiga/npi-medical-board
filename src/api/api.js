import axios from "axios";

export default async function fetchDoctorInfo(npId) {
  const API_BASE_URL = import.meta.env.DEV
    ? import.meta.env.VITE_LOCAL_API_BASE_URL
    : import.meta.env.VITE_PROD_API_BASE_URL;

  const api = axios.create({
    baseURL: import.meta.env.PROD ? `${API_BASE_URL}` : `${API_BASE_URL}`,
  });

  const config = {
    method: "get",
    url: `/api/${npId}`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    withCredentials: true,
  };
  try {
    const response = await api.request(config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
