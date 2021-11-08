import { combineReducers } from "redux";
import themeReducer from "./reducers/themeReducer";
import searchReducer from "./reducers/searchReducer";

export default combineReducers ({
    themeReducer,
    searchReducer
})
