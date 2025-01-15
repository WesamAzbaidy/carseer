import {
    GET_VEHICLE_TYPES_REQUEST,
    GET_VEHICLE_TYPES_SUCCESS,
    GET_VEHICLE_TYPES_ERROR,
} from './VehicleTypesAction.js';

export default function VehicleTypesReducer(
    state = {
        data: {},
        error: false,
        loading: false,
    },
    action = {}
) {
    switch (action.type) {
        case GET_VEHICLE_TYPES_ERROR:
            return {
                ...state,
                error: true,
                loading: false,
            };
        case GET_VEHICLE_TYPES_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case GET_VEHICLE_TYPES_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false,
            };
        default:
            return state;
    }
}
