import {applyMiddleware, combineReducers, createStore} from 'redux'
import todoReducer from "./todo/todoReducer";
import loginReducer from "./login/loginReducer";

const reducer = combineReducers({
    todo: todoReducer,
    login: loginReducer
});

const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();
const store = createStore(reducer, applyMiddleware(logger));
export default store
