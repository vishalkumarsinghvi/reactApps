import {combineReducers} from "redux";
import todoReducer from "./todo/todoReducer";
import loginReducer from "./login/loginReducer";
import radioReducer from "./radio/radioReducer";

const rootReducer = combineReducers({
    todo: todoReducer,
    login: loginReducer,
    radio: radioReducer,
});

export default rootReducer
