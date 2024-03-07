import axios from "axios";
import { BASE_URL } from "../../constants";
import { setAuthHeaders } from "lib/functions/setApiHeaders.ts";

const createInstance = () => {
  return axios.create({
    baseURL: BASE_URL,
    timeout: +20000,
    headers: {
      "Content-Type": "application/json",
      "X-Auth": setAuthHeaders(),
    },
  });
};

export const axiosProject = createInstance();
