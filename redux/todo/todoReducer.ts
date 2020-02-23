import * as Actions from './todoTypes';

const initialState = {
    loaded: false,
    todoList: [],
    error: '',
};

const todoReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case Actions.FETCH_TODO_REQUEST:
            return {
                ...state,
                loaded: true,
            };
        case Actions.FETCH_TODO_SUCCESS:
            return {
                ...state,
                todoList: action.payload,
                loaded: false,
                error: '',
            };
        case Actions.FETCH_TODO_FAILURE:
            return {
                ...state,
                todoList: [],
                loaded: false,
                error: action.payload,
            };
        default:
            return state
    }

};

export default todoReducer;
