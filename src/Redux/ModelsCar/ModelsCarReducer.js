import {
    GET_MODELS_CAR_REQUEST,
    GET_MODELS_CAR_SUCCESS,
    GET_MODELS_CAR_ERROR,
} from './ModelsCarAction.js';

export default function ModelsCarReducer(
    state = {
        modelsCar: {},
        modelsCarError: false,
        modelsCarLoading: false,
    },
    action = {}
) {
    switch (action.type) {
        case GET_MODELS_CAR_ERROR:
            return {
                ...state,
                modelsCarError: true,
                modelsCarLoading: false,
            };
        case GET_MODELS_CAR_REQUEST:
            return {
                ...state,
                modelsCarLoading: true,
                modelsCarError: false,
            };
        case GET_MODELS_CAR_SUCCESS:
            return {
                ...state,
                modelsCar: action.payload,
                modelsCarLoading: false,
                modelsCarError: false,
            };
        default:
            return state;
    }
}
