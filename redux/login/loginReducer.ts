import {LOGIN_DATA} from "./loginTypes";

const initialState = {
    username: "",

};

const loginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_DATA:
            return {
                ...state,
                username: action.payload,

            };
        default:
            return state
    }
};


export default loginReducer;
