import { http } from "../../helpers/http"

const {REACT_APP_BACKEND_URL : URL} = process.env

export const getUser = (token) => async (dispatch) => {
    try {
      const { data } = await http(token).get(`${URL}/profile`);
      dispatch({
        type: 'USER_GET_DETAILS',
        payload: data.results,
      });
    } catch (err) {
      dispatch({
        type: 'USER_GET_DETAILS_FAILED',
        payload: err.response.data.message,
      });
    }
  };

export const updateUser = (token, Data) => async (dispatch) => {
    const form = new FormData();
    if (Data.picture !== null) {
      form.append('picture', Data.picture[0]);
    }
    form.append('email', Data.email);
    form.append('number', Data.number);
    form.append('address', Data.address);
    form.append('name', Data.name);
    form.append('firstName', Data.firstName);
    form.append('lastName', Data.lastName);
    try {
      const { data } = await http(token).patch(`${URL}/updateProfile`, form);
      dispatch({
        type: 'USER_UPDATE',
        payload: data.message,
      });
    } catch (err) {
      dispatch({
        type: 'USER_UPDATE_FAILED',
        payload: err.response.data.message,
      });
    }
  };

