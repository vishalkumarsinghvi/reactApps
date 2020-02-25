import {applyMiddleware, createStore} from 'redux'
import rootReducer from "./rootReducer";
// import thunk from "redux-thunk";
import createSaga from 'redux-saga'
import root from '../saga/saga'

const reduxLogger = require('redux-logger');
const reduxSaga =createSaga();
const logger = reduxLogger.createLogger();
const store = createStore(rootReducer, applyMiddleware(logger,reduxSaga));
reduxSaga.run(root)
export default store
