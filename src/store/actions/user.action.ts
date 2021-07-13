import { USER_LOGGED_IN } from "../constants";
import userService from "../services/user.service";
import history from "../../PageRoutes/history";
import { path } from "../../PageRoutes/routes";
const login =
  (email: string, password: string) => async (dispatch: Function) => {
    const result = await userService.login(email, password);
    dispatch(result);
    if (result.type === USER_LOGGED_IN) {
      history.replace(path.Home);
    }
  };
const setUser = () => (dispatch: Function) => {
  const result = userService.setUser();
  dispatch(result);
};
const logout = (navigate: boolean) => async (dispatch: Function) => {
  const result = userService.logout();
  dispatch(result);

  if (navigate) {
    setTimeout(() => {
      history.replace(path.Home);
    },1000)
  }
};

export { login, logout, setUser };
