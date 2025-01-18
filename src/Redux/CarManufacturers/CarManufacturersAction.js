import ApiComponent from "../../component/API/ApiComponent";

// Define action types for GetAllMakes
export const GET_ALL_MAKES_REQUEST = 'GET_ALL_MAKES_REQUEST';
export const GET_ALL_MAKES_SUCCESS = 'GET_ALL_MAKES_SUCCESS';
export const GET_ALL_MAKES_ERROR = 'GET_ALL_MAKES_ERROR';

// Define action creators for GetAllMakes
export const getAllMakesRequest = () => {
    return {
        type: GET_ALL_MAKES_REQUEST,
    };
};

export const getAllMakesSuccess = (data) => {
    return {
        type: GET_ALL_MAKES_SUCCESS,
        payload: data,
    };
};

export const getAllMakesError = () => {
    return {
        type: GET_ALL_MAKES_ERROR,
    };
};

// GetAllMakes API call using ApiComponent
export const GetAllMakes = (size = 10, makeNameSearch = '') => async (dispatch) => {
    await ApiComponent({
        url: 'https://localhost:44353/api/Vehicle/makes',
        method: 'GET',
        dispatch,
        onRequest: getAllMakesRequest,
        onSuccess: getAllMakesSuccess,
        onError: getAllMakesError,
        params: { size, makeNameSearch },
    });
};
