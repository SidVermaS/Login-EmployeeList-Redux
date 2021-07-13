import cookies from "react-cookies";

import { postloginAPI } from "../../networks/apis/loginAPI";
import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  LOGIN_FAILURE,
  LOGIN_INVALID_CREDENTIALS,
} from "../constants";

const login = async (email: string, password: string) => {
  try {
    const { status, body } = await postloginAPI({ email, password });
    if (status === 200) {
      cookies.save("token", body.token, {});
      return { payload: "Logged in successfully", type: USER_LOGGED_IN };
    } else {
      return {
        payload: "Email/password is incorrect",
        type: LOGIN_INVALID_CREDENTIALS,
      };
    }
  } catch (error) {
    return { payload: "Authentication failed", type: LOGIN_FAILURE };
  }
};
const setUser =  () => {
  return { payload: "Logged in successfully", type: USER_LOGGED_IN };
};
export const logout = () => {
  cookies.remove("token");
  return { payload: "Logged out", type: USER_LOGGED_OUT };
};
const userService = {
  login,
  logout,
  setUser,
};
export default userService;
