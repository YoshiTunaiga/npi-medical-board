import axios from "axios";

// const API_BASE_URL = "https://npi-db.org"; // backend API URL

export default async function fetchDoctorInfo(npId) {
  try {
    const instance = axios.create();
    const config = {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        // Accept: "application/json, text/plain, */*",
        // "Access-Control-Allow-Origin": "*",
      },
    };
    const response = await instance.get(`/api/${npId}`, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching doctor info:", error);
    throw error;
  }
}
