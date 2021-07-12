import cookies from "react-cookies";

import { postloginAPI } from "../../networks/apis/loginAPI";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_INVALID_CREDENTIALS,
} from "../constants";

export const login = async (email: string, password: string) => {
  try {
    const { status, body } = await postloginAPI({ email, password });
    if (status === 200) {
      cookies.save("token", body.token, {});
      return LOGIN_SUCCESS;
    } else {
      return LOGIN_INVALID_CREDENTIALS;
    }
  } catch (error) {
    return LOGIN_FAILURE;
  }
};
