import { EMPLOYEES_FETCH_FAILURE, EMPLOYEES_FETCH_SUCCESS } from "../constants";
import employeesService from "../services/employees.service";

const fetch = () => async (dispatch: Function) => {
  const result = await employeesService.fetch();
  dispatch(result);
};

export { fetch };
