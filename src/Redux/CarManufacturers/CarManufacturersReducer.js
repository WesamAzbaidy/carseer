import {
    GET_ALL_MAKES_REQUEST,
    GET_ALL_MAKES_SUCCESS,
    GET_ALL_MAKES_ERROR,
} from './CarManufacturersAction.js';

export default function CarManufacturersAction(
    state = {
        data: {},
        error: false,
        loading: false,
    },
    action = {}
) {
    switch (action.type) {
        case GET_ALL_MAKES_ERROR:
            return {
                ...state,
                loading: false,
            };
        case GET_ALL_MAKES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ALL_MAKES_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}
