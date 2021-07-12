import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_INVALID_CREDENTIALS,
} from "../constants";
import { login as loginService } from "../services/login.service";
export const login =
  (email: string, password: string) => async (dispatch: Function) => {
    const result = await loginService(email, password);
    
    dispatch({ type: result, payload: "" });
  };
