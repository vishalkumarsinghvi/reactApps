import {GET_TODO} from "./todoTypes";

const initialState = {
    todoList: [],
    username:""
};

const todoReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case GET_TODO:
            return {
                ...state,
                todoList: action.payload,
                username: action.username,
            };
        default:
            return state
    }

};

export default todoReducer;
