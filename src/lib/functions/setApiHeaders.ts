import { PASSWORD } from "../constants";
import md5 from "md5";

export const setAuthHeaders = () => {
  const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  return md5(`${PASSWORD}_${timestamp}`);
};
