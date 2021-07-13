import { combineReducers } from "redux";
import user from "./user.reducer";
import employees from './employees.reducer'
const reducer = combineReducers({ user, employees });

export default reducer;
