import * as Actions from "./radioType";

const initialState = {
    loaded: false,
    radioList: [],
    error: '',
};

const radioReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case Actions.FETCH_RADIO_REQUEST:
            return {
                ...state,
                loaded: true,
            };
        case Actions.FETCH_RADIO_SUCCESS:
            return {
                ...state,
                loaded: false,
                radioList: action.payload,
                error: '',
            };
        case Actions.FETCH_RADIO_FAILURE:
            return {
                ...state,
                loaded: false,
                radioList: [],
                error: action.payload,
            };
        default:
            return state
    }
};

export default radioReducer;
