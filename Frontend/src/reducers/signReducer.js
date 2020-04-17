import {
    SIGN_IN,
    SIGN_OUT,
    SIGN_UP }
    from "../actions/types";

const INITIAL_STATE = {
    role: -1
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_UP:
            return { ...state, role: action.payload.role, username: action.payload.username, mail: action.payload.mail }; //Gdyby coś zmienić z serwerem to można to znacznie skrócić: return { ...state, [action.payload.id]: action.payload }
        case SIGN_IN:
            return { ...state, role: action.payload.role, username: action.payload.username, mail: action.payload.mail };
        case SIGN_OUT:
            return INITIAL_STATE
        default:
            return state
    }
}