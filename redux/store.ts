import {applyMiddleware, createStore} from 'redux'
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export default store
