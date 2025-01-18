import {
    GET_MODELS_CAR_REQUEST,
    GET_MODELS_CAR_SUCCESS,
    GET_MODELS_CAR_ERROR,
    RESET_MODELS_DATA,
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
                modelsCar: null,
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
                modelsCar: action.payload.data,
                modelsCarLoading: false,
                modelsCarError: false,
            };
        case RESET_MODELS_DATA:
            return {
                ...state,
                modelsCar: { data: undefined, loading: false, error: false },
            };
        default:
            return state;
    }
}
