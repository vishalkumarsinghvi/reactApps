import {GET_TODO} from "./todoTypes";

const initialState = {
    // todoList: [],
    username: '',
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODO:
            return {
                ...state,
                // todoList: state.todoList,
                username: state.username,
            };
        default:
            return state
    }

};

export default todoReducer;
