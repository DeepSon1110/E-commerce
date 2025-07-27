import axios from "axios";
import { BASE_URL } from "./constants";

export const handleGetOperation = async (url) => {
  try {
    const result = await axios.get(`${BASE_URL}${url}`, {
      withCredentials: true,
    });

    return result;
  } catch (error) {
    return error;
  }
};
