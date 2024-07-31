import axios from "axios";

export default async function fetchDoctorInfo(npId) {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `/api/${npId}`,
    headers: {},
  };
  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
