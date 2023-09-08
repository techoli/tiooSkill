import axios from "axios";
import { SIGNUP_URL } from "./url";

const handlePostAPI = async (
  url?: string,
  payload?: string | {} | any,
  config?: {}
) => {
  const configs = {
    method: "post",
    url: url,
    ...config,
    body: payload,
  };
  try {
    return await axios(configs).then((res) => res);
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async (vals: {}, config?: {}) => {
  return handlePostAPI(SIGNUP_URL, vals, config);
};
