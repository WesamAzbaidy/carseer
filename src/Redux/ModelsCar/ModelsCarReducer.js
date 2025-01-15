import {
    GET_MODELS_CAR_REQUEST,
    GET_MODELS_CAR_SUCCESS,
    GET_MODELS_CAR_ERROR,
} from './ModelsCarAction.js';

export default function ModelsCarReducer(
    state = {
        data: {},
        error: false,
        loading: false,
    },
    action = {}
) {
    switch (action.type) {
        case GET_MODELS_CAR_ERROR:
            return {
                ...state,
                error: true,
                loading: false,
            };
        case GET_MODELS_CAR_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case GET_MODELS_CAR_SUCCESS:
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
