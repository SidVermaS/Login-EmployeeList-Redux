import {
EMPLOYEES_FETCH_FAILURE, EMPLOYEES_FETCH_SUCCESS
} from "../constants";
import { ActionI } from "../../interfaces";
const initialState = {
  employees: null,
  type: null,
};

const employees = (state = initialState, action: ActionI) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      return { ...state, employees: action.payload, type: EMPLOYEES_FETCH_SUCCESS };
    case EMPLOYEES_FETCH_FAILURE:
      return { ...state, employees: action.payload, type: EMPLOYEES_FETCH_FAILURE };
    default:
      return state;
  }
};

export default employees;
