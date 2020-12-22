import * as actionTypes from './actionTypes';
import axios from 'axios';

export const userLogout = () => {
  localStorage.removeItem('userId');
  localStorage.removeItem('userToken');
  return {
    type: actionTypes.USER_LOGOUT,
  };
};

export const userAuthStart = () => ({
  type: actionTypes.USER_AUTH_START,
});

export const userAuthSuccess = (_id, token) => ({
  type: actionTypes.USER_AUTH_SUCCESS,
  payload: { _id, token },
});
export const userAuthFail = (error) => ({
  type: actionTypes.USER_AUTH_FAIL,
  payload: error,
});

export const userAuth = (userData, isNewAccount) => async (dispatch) => {
  dispatch(userAuthStart());
  const url = isNewAccount ? '/api/users/' : '/api/users/login';
  const body = { ...userData };
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const { data } = await axios.post(url, body, config);
    dispatch(userAuthSuccess(data._id, data.token));
    localStorage.setItem('userId', JSON.stringify(data._id));
    localStorage.setItem('userToken', JSON.stringify(data.token));
  } catch (err) {
    const isError =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(userAuthFail(isError));
  }
};

export const userProfileFetchStart = () => ({
  type: actionTypes.USER_PROFILE_FETCH_START,
});
export const userProfileFetchSuccess = (user) => ({
  type: actionTypes.USER_PROFILE_FETCH_SUCCESS,
  payload: user,
});
export const userProfileFetchFail = () => ({
  type: actionTypes.USER_PROFILE_FETCH_FAIL,
});

export const userProfileFetch = (id, token) => async (dispatch) => {
  dispatch(userProfileFetchStart());
  const url = `/api/users/profile`;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const { data } = await axios.get(url, config);
    dispatch(userProfileFetchSuccess(data));
  } catch (err) {
    const isError =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(userProfileFetchFail(isError));
  }
};
