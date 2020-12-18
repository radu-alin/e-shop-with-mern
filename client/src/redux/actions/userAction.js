import * as actionTypes from './actionTypes';
import axios from 'axios';

export const userVerifyAuth = (user) => ({
  type: actionTypes.USER_AUTH_SUCCESS,
  payload: user,
});

export const userLogout = () => {
  localStorage.removeItem('user');
  return {
    type: actionTypes.USER_LOGOUT,
  };
};

export const userAuthStart = () => ({
  type: actionTypes.USER_AUTH_START,
});

export const userAuthSuccess = (user) => ({
  type: actionTypes.USER_AUTH_SUCCESS,
  payload: user,
});
export const userAuthFail = (error) => ({
  type: actionTypes.USER_AUTH_FAIL,
  payload: error,
});

export const userAuth = (userData, isNewAccount) => async (dispatch) => {
  dispatch(userAuthStart());
  const body = { ...userData };
  console.log('body - ', body);
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const url = isNewAccount ? '/api/users/' : '/api/users/login';
  try {
    const { data } = await axios.post(url, body, options);
    dispatch(userAuthSuccess(data));
    localStorage.setItem('user', JSON.stringify(data));
  } catch (err) {
    const isError =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    console.log('isError - ', isError);
    dispatch(userAuthFail(isError));
  }
};
