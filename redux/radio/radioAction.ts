import {FETCH_RADIO_FAILURE, FETCH_RADIO_REQUEST, FETCH_RADIO_SUCCESS} from "./radioType";

export const fetchRadioRequest = () => {
    return {
        type: FETCH_RADIO_REQUEST
    }
};
export const fetchRadioSuccess = (radioList: []) => {
    return {
        type: FETCH_RADIO_SUCCESS,
        payload: radioList,
    }
};
export const fetchRadioFailure = (error: any) => {
    return {
        type: FETCH_RADIO_FAILURE,
        payload: error,
    }
};
