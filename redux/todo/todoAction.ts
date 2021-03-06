import {FETCH_TODO_FAILURE, FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS} from './todoTypes';
import axios from 'axios';
import {Dispatch} from "redux";

export const fetchTodoRequest = () => {
    return {
        type: FETCH_TODO_REQUEST,
    }
};

export const fetchTodoSuccess = (todoList: []) => {
    return {
        type: FETCH_TODO_SUCCESS,
        payload: todoList,
    }
};

export const fetchTodoFailure = (error: any) => {
    return {
        type: FETCH_TODO_FAILURE,
        payloadL: error,
    }
};
// using fetch we can get todolist here
export const fetchTodoList = (dispatch: Dispatch) => {
    dispatch(fetchTodoRequest());
    const request = new Request('https://jsonplaceholder.typicode.com/todos', {method: 'GET'});
    fetch(request)
        .then(response => response.json())
        .then(data => dispatch(fetchTodoSuccess(data)))
        .catch(error => dispatch(fetchTodoFailure(error)))
};

// using fetch we can get todolist here
export const getTodoDataFromAxios = (dispatch: Dispatch) => {
    dispatch(fetchTodoRequest());
    const request = new Request('https://jsonplaceholder.typicode.com/todos', {method: 'GET'});
    axios.get(request)
        .then((response: any) => response.json())
        .then((data: any) => dispatch(fetchTodoSuccess(data)))
        .catch((error: any) => dispatch(fetchTodoFailure(error)))
};
