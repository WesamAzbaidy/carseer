import {
    GET_ALL_MAKES_REQUEST,
    GET_ALL_MAKES_SUCCESS,
    GET_ALL_MAKES_ERROR,
} from './CarManufacturersAction.js';

export default function CarManufacturersAction(
    state = {
        makesList: {},
        makesListError: false,
        makesListLoading: false,
    },
    action = {}
) {
    switch (action.type) {
        case GET_ALL_MAKES_ERROR:
            return {
                ...state,
                makesList: null,
                makesListLoading: false,
                makesListError: true,
            };
        case GET_ALL_MAKES_REQUEST:
            return {
                ...state,
                makesListLoading: true,
                makesListError: false,
            };
        case GET_ALL_MAKES_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                makesListLoading: false,
                makesListError: false,
            };
        default:
            return state;
    }
}
