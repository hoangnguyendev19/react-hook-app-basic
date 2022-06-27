import hobbyReducer from "./hobby";
import userReducer from "./user";
import { combineReducers } from "redux";

const rootReducer = () => {
    hobby: hobbyReducer,
    user: userReducer,
}
