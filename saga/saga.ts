import {call, takeLatest, fork,all,put} from 'redux-saga/effects';
import {fetchTodoSuccess} from '../redux/todo/todoAction';
import {FETCH_TODO_REQUEST} from '../redux/todo/todoTypes';
import {fetchData} from '../api/api';

function* getTodoAaiData() {
    // api call
    try {
        const data = yield call(fetchData);
        yield put(fetchTodoSuccess(data));

    } catch (e) {
        console.log(e)
    }
}

export function* watchGetTodo() {
    yield takeLatest(FETCH_TODO_REQUEST, getTodoAaiData)
}

export function* root() {
    yield all([  fork(watchGetTodo) ])
}

export default root

