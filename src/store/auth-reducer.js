import * as actionTypes from "../constants";

const INITIAL_STATE = {
    token: null,
    isFetching: false,
    isError: false,
    message: "",
};

export default function authReducer(
    state = INITIAL_STATE,
    { type, payload }
) {
    switch (type) {
        case actionTypes.authTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: true,
                isError: false,
                token: payload,
                message: "",
            };
        case actionTypes.authTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                token: null,
                isError: false,
            };

        default:
            return state;
    }
}
