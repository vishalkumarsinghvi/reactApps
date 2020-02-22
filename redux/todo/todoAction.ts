import {FETCH_TODO_FAILURE, FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS} from "./todoTypes";
import axios from 'axios';

export const fetchTodoRequest = () => {
    return {
        type: FETCH_TODO_REQUEST,
        // username: username
    }
};

export const fetchTodoSuccess = (todoList) => {
    return {
        type: FETCH_TODO_SUCCESS,
        payload: todoList
    }
};

export const fetchTodoFailure = error => {
    return {
        type: FETCH_TODO_FAILURE,
        payloadL: error
    }
}

export const fetchTodoList = () => {
    return (dispatch) => {
        console.log('call start')
        dispatch(fetchTodoRequest)
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                console.log(response)
                const todoList = response.data;
                dispatch(fetchTodoSuccess(todoList))
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchTodoFailure(errorMessage))
            })
    }

    // return (dispatch) => {
    //     dispatch(fetchTodoRequest())
    //     axios.get('https://jsonplaceholder.typicode.com/todos')
    //         .then(function (response) {
    //
    //             // handle your response here, create an object/array/array of objects etc...
    //             // and return it in dispatch(getToDosSuccess(data over here))
    //
    //             return(dispatch(fetchTodoSuccess(response.data)))
    //         })
    //         .catch(err => dispatch(fetchTodoFailure(err)))
    // }

    // return(dispatch)=> {
    //     dispatch(fetchTodoRequest())
    //     const request = new Request('https://jsonplaceholder.typicode.com/todos', {method: 'GET'});
    //     fetch(request)
    //         .then(response => response.json())
    //         .then(data =>dispatch(fetchTodoFailure(data)))
    //         .catch(error =>dispatch(fetchTodoFailure(error)))
    // }
};
