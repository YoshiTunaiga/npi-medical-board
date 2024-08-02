import axios from "axios";

export default async function fetchDoctorInfo(npId) {
  let config = {
    method: "get",
    url: `/api/${npId}`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    withCredentials: true,
  };
  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
