import { ActionsTypes, ACTIONS_TYPE } from "./actions";

const initialState = { value: 0, a: 0 };

const reducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ACTIONS_TYPE.INC:
            return {
                ...state,
                value: state.value + 1,
            };
        case ACTIONS_TYPE.DEC:
            return {
                ...state,
                value: state.value - 1,
            };
        case ACTIONS_TYPE.RND:
            return {
                ...state,
                value: state.value * action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
