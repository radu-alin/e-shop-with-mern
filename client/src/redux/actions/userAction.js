import * as actionTypes from './actionTypes';
import axios from 'axios';

export const userLogout = () => {
  localStorage.removeItem('userId');
  localStorage.removeItem('userToken');
  return {
    type: actionTypes.USER_LOGOUT,
  };
};
//userResetError
export const userResetError = () => ({
  type: actionTypes.USER_RESET_ERROR,
});

// userAuth
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

// userProfileFetch

export const userProfileFetchStart = () => ({
  type: actionTypes.USER_PROFILE_FETCH_START,
});
export const userProfileFetchFail = (error) => ({
  type: actionTypes.USER_PROFILE_FETCH_FAIL,
  payload: error,
});
export const userProfileFetchSuccess = (user) => ({
  type: actionTypes.USER_PROFILE_FETCH_SUCCESS,
  payload: user,
});
export const userProfileFetch = (token) => async (dispatch) => {
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
export const userProfileFetchedClear = () => ({
  type: actionTypes.USER_PROFILE_FETCHED_CLEAR,
});

// userProfileUpdate
export const userProfileUpdateStart = () => ({
  type: actionTypes.USER_PROFILE_UPDATE_START,
});
export const userProfileUpdateFail = (error) => ({
  type: actionTypes.USER_PROFILE_UPDATE_FAIL,
  payload: error,
});
export const userProfileUpdateSuccess = (user) => ({
  type: actionTypes.USER_PROFILE_UPDATE_SUCCESS,
  payload: user,
});
export const userProfileUpdate = (token, userData) => async (dispatch) => {
  dispatch(userProfileUpdateStart());
  const url = '/api/users/profile';
  const body = { ...userData };
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const { data } = await axios.put(url, body, config);
    dispatch(userProfileUpdateSuccess(data));
  } catch (err) {
    const isError =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(userProfileUpdateFail(isError));
  }
};
export const userProfileUpdateClear = (error) => ({
  type: actionTypes.USER_PROFILE_UPDATE_CLEAR,
  payload: error,
});
