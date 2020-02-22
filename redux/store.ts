import {applyMiddleware, createStore} from 'redux'
import rootReducer from "./rootReducer";

const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();
const store = createStore(rootReducer, applyMiddleware(logger));
export default store
