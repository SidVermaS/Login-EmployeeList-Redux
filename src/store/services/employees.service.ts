import { EMPLOYEES_FETCH_FAILURE, EMPLOYEES_FETCH_SUCCESS } from "../constants";
import { getemployeeAPI } from "../../networks/apis/employeeAPI";
const fetch = async () => {
  try {
    const { status, body } = await getemployeeAPI();
    if (status === 200) {
      return { payload: body?.user, type: EMPLOYEES_FETCH_SUCCESS };
    } else {
      return {
        payload: null,
        type: EMPLOYEES_FETCH_FAILURE,
      };
    }
  } catch (error) {
    return { payload: null, type: EMPLOYEES_FETCH_FAILURE };
  }
};
const employeesService = { fetch };
export default employeesService;
