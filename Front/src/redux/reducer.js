import { GET_ALL_TANKS, GET_TANK_DETAILS, CLEAN_TANK_DETAILS } from "./action-types";

const initialState = {
    tanks: [],
    tankDetails: null,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_TANKS:
            return {
                ...state,
                tanks: action.payload
            }
        case GET_TANK_DETAILS:
            return {
                ...state,
                tankDetails: action.payload
            }
        case CLEAN_TANK_DETAILS:
            return {
                ...state,
                tankDetails: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;