import {LOGIN_DATA} from "./loginTypes";

export const getLoginData = (username:string) => {
    return {
        type: LOGIN_DATA,
        payload:username
    }
};

