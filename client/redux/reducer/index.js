import { combineReducers } from "redux";
import alert from "./alert.reducer";
import auth from "./auth.reducer";
import ProductReducer from "./productReducer";

export default combineReducers({
    auth,
    alert,
    ProductReducer
});
