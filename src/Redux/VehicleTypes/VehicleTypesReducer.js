import {
    GET_VEHICLE_TYPES_REQUEST,
    GET_VEHICLE_TYPES_SUCCESS,
    GET_VEHICLE_TYPES_ERROR,
} from './VehicleTypesAction.js';

export default function VehicleTypesReducer(
    state = {
        vehicleTypes: {},
        vehicleTypesError: false,
        vehicleTypesLoading: false,
    },
    action = {}
) {
    switch (action.type) {
        case GET_VEHICLE_TYPES_ERROR:
            return {
                ...state,
                vehicleTypesError: true,
                vehicleTypesLoading: false,
            };
        case GET_VEHICLE_TYPES_REQUEST:
            return {
                ...state,
                vehicleTypesLoading: true,
                vehicleTypesError: false,
            };
        case GET_VEHICLE_TYPES_SUCCESS:
            return {
                ...state,
                vehicleTypes: action.payload,
                vehicleTypesLoading: false,
                vehicleTypesError: false,
            };
        default:
            return state;
    }
}
