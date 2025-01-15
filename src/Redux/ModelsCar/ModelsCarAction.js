import ApiComponent from "../../component/API/ApiComponent";

// Define action types for GetModelsForMakeIdYear
export const GET_MODELS_CAR_REQUEST = 'GET_MODELS_CAR_REQUEST';
export const GET_MODELS_CAR_SUCCESS = 'GET_MODELS_CAR_SUCCESS';
export const GET_MODELS_CAR_ERROR = 'GET_MODELS_CAR_ERROR';

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

// GetModelsForMakeIdYear API call using ApiComponent
export const GetModelsForMakeIdYear = (makeId, modelYear) => async (dispatch) => {
    await ApiComponent({
        url: `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${modelYear}?format=json`,
        method: 'GET',
        dispatch,
        onRequest: getModelsCarRequest,
        onSuccess: getModelsCarSuccess,
        onError: getModelsCarError,
    });
};
