import { authActionTypes } from "./actions/auth.types";

const initialState = {
    isAuthenticated: false,
    error: "",
    currentUser: {},
};

// eslint-disable-next-line default-param-last
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authActionTypes.LOGIN_USER:
            return {
                ...state,
                isAuthenticated: true,
                error: {},
                currentUser: action.payload,
            };

        case authActionTypes.LOGIN_FAILED:
            return {
                ...state,
                isAuthenticated: false,
                currentUser: {},
                error: action.payload,
            };

        case authActionTypes.REGISTER_USER:
            return {
                ...state,
                isAuthenticated: true,
                currentUser: action.payload.user,
                error: {},
            };
        case authActionTypes.REGISTER_FAILED:
            return {
                ...state,
                error: action.payload.validation.body.message,
                currentUser: {},
            };
        case authActionTypes.LOGOUT_USER:
            return {
                ...state,
                isAuthenticated: false,
                error: {},
                currentUser: {},
            };
        default:
            return state;
    }
};

export default authReducer;
