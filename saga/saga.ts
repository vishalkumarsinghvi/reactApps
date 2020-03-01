import {call, takeLatest, fork, all, put} from 'redux-saga/effects';
import {fetchTodoSuccess} from '../redux/todo/todoAction';
import {FETCH_TODO_REQUEST} from '../redux/todo/todoTypes';
import {fetchData,fetchRadioData} from '../api/api';
import {FETCH_RADIO_REQUEST} from "../redux/radio/radioType";
import {fetchRadioSuccess} from "../redux/radio/radioAction";

function* getTodoApiData() {
    // api call
    try {
        const data = yield call(fetchData);
        yield put(fetchTodoSuccess(data));

    } catch (e) {
        console.log(e)
    }
}

export function* watchGetTodo() {
    yield takeLatest(FETCH_TODO_REQUEST, getTodoApiData)
}

function* getRadioApiData() {
    try {
        const data=yield call(fetchRadioData)
yield put(fetchRadioSuccess(data))
    } catch (e) {
        console.log(e)
    }
}

export function* watchRadioList() {
    yield takeLatest(FETCH_RADIO_REQUEST, getRadioApiData)
}

export function* root() {
    yield all([fork(watchGetTodo), fork(watchRadioList)])
}

export default root

