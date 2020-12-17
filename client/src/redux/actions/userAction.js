import * as actionTypes from './actionTypes';
import axios from 'axios';

export const userLogout = () => {
  localStorage.removeItem('user');
  return {
    type: actionTypes.USER_LOGOUT,
  };
};

export const userLoginStart = () => ({
  type: actionTypes.USER_LOGIN_START,
});

export const userLoginSuccess = (user) => ({
  type: actionTypes.USER_LOGIN_SUCCESS,
  payload: user,
});
export const userLoginFail = (error) => ({
  type: actionTypes.USER_LOGIN_FAIL,
  payload: error,
});

export const userLogin = (email, password) => async (dispatch) => {
  dispatch(userLoginStart());
  const body = {
    email,
    password,
  };
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const { data } = await axios.post('/api/users/login', body, options);
    dispatch(userLoginSuccess(data));
    localStorage.setItem('user', JSON.stringify(data));
  } catch (err) {
    const isError =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    console.log('isError - ', isError);
    dispatch(userLoginFail(isError));
  }
};
