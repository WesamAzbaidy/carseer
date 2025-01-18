import ApiComponent from "../../component/API/ApiComponent";

// Define action types for GetModelsForMakeIdYear
export const GET_MODELS_CAR_REQUEST = 'GET_MODELS_CAR_REQUEST';
export const GET_MODELS_CAR_SUCCESS = 'GET_MODELS_CAR_SUCCESS';
export const GET_MODELS_CAR_ERROR = 'GET_MODELS_CAR_ERROR';

export const RESET_MODELS_DATA = 'RESET_MODELS_DATA';

// Define action creators for GetModelsForMakeIdYear
export const getModelsCarRequest = () => {
    return {
        type: GET_MODELS_CAR_REQUEST,
    };
};

export const getModelsCarSuccess = (data) => {
    return {
        type: GET_MODELS_CAR_SUCCESS,
        payload: data,
    };
};

export const getModelsCarError = () => {
    return {
        type: GET_MODELS_CAR_ERROR,
    };
};


export const resetModelsData = () => ({
    type: RESET_MODELS_DATA,
});

// GetModelsForMakeIdYear API call using ApiComponent
export const GetModelsForMakeIdYear = (makeId, modelYear, vehicleType) => async (dispatch) => {
    await ApiComponent({
        url: `https://localhost:44353/api/Vehicle/models?makeId=${makeId}&year=${modelYear}&vehicleType=${vehicleType}`,
        method: 'GET',
        dispatch,
        onRequest: getModelsCarRequest,
        onSuccess: getModelsCarSuccess,
        onError: getModelsCarError,
    });
};
