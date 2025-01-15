import axios from "axios";

const ApiComponent = async ({ url, method, dispatch, onRequest, onSuccess, onError, data, params }) => {
  dispatch(onRequest());

  try {
    const response = await axios({
      method,
      url,
      data,
      params,
    });

    dispatch(onSuccess(response.data));
  } catch (error) {
    dispatch(onError());
  }
};

export default ApiComponent;
