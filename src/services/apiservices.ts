import axios from "axios";
import {
  SIGNUP_URL,
  VERIFY_URL,
  RESEND_URL,
  SIGNIN_URL,
  CONTACT_URL,
  SINGINTIOO_URL,
  COURSEOUTLINE_URL,
  RESETPASS_URL,
  DORESETPASS_URL,
} from "./url";

// const handlePostAPI = async (
//   url?: string,
//   payload?: string | {} | any,
//   config?: {}
// ) => {
//   const configs = {
//     method: "post",
//     url: url,
//     ...config,
//     body: payload,
//   };
//   try {
//     return await axios(configs).then((res) => res);
//   } catch (error) {
//     console.log(error);
//   }
// };
const handlePostAPI = async (
  url?: string,
  payload?: string | {},
  config?: {}
) => {
  return await axios.post(`${url}`, payload, config).then((res) => res);
};

export const signUp = async (vals: {}, config?: {}) => {
  return handlePostAPI(SIGNUP_URL, vals, config);
};
export const verifyEmail = async (vals: {}, config?: {}) => {
  return handlePostAPI(VERIFY_URL, vals, config);
};
export const resendEmail = async (vals: {}, config?: {}) => {
  return handlePostAPI(RESEND_URL, vals, config);
};
export const signIn = async (vals: {}, config?: {}) => {
  return handlePostAPI(SIGNIN_URL, vals, config);
};
export const contactUs = async (vals: {}, config?: {}) => {
  return handlePostAPI(CONTACT_URL, vals, config);
};
export const signinTIoo = async (vals: any, config?: {}) => {
  return handlePostAPI(SINGINTIOO_URL, vals, config);
};
export const sendCourseoutline = async (vals: {}, config?: {}) => {
  return handlePostAPI(COURSEOUTLINE_URL, vals, config);
};
export const resetPassword = async (vals: {}, config?: {}) => {
  return handlePostAPI(RESETPASS_URL, vals, config);
};
export const doresetPassword = async (vals: {}, config?: {}) => {
  return handlePostAPI(DORESETPASS_URL, vals, config);
};
