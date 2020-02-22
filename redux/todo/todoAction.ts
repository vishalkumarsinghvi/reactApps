import {GET_TODO} from "./todoTypes";

export const getTodo = (todolist: [], username: string) => {
    return {
        type: GET_TODO,
        payload: todolist,
        username: username
    }
};
