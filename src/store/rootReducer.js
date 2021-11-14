import { combineReducers } from "redux";
import themeReducer from "./reducers/themeReducer";
import searchReducer from "./reducers/searchReducer";
import adsReducer from "./reducers/adsReducer";

export default combineReducers ({
    themeReducer,
    searchReducer,
    adsReducer
})
