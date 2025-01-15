import ApiComponent from "../../component/API/ApiComponent";

// Define action types for GetVehicleTypesForMake
export const GET_VEHICLE_TYPES_REQUEST = 'GET_VEHICLE_TYPES_REQUEST';
export const GET_VEHICLE_TYPES_SUCCESS = 'GET_VEHICLE_TYPES_SUCCESS';
export const GET_VEHICLE_TYPES_ERROR = 'GET_VEHICLE_TYPES_ERROR';

// Define action creators for GetVehicleTypesForMake
export const getVehicleTypesRequest = () => {
    return {
        type: GET_VEHICLE_TYPES_REQUEST,
    };
};

export const getVehicleTypesSuccess = (data) => {
    return {
        type: GET_VEHICLE_TYPES_SUCCESS,
        payload: data,
    };
};

export const getVehicleTypesError = () => {
    return {
        type: GET_VEHICLE_TYPES_ERROR,
    };
};

// GetVehicleTypesForMake API call using ApiComponent
export const GetVehicleTypesForMake = (makeId) => async (dispatch) => {
    await ApiComponent({
        url: `https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMakeId/${makeId}?format=json`,
        method: 'GET',
        dispatch,
        onRequest: getVehicleTypesRequest,
        onSuccess: getVehicleTypesSuccess,
        onError: getVehicleTypesError,
    });
};
