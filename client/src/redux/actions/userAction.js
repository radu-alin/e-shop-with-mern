import * as actionTypes from './actionTypes';
import axios from 'axios';

export const userLogout = () => {
  localStorage.removeItem('userId');
  localStorage.removeItem('userToken');
  localStorage.removeItem('userIsAdmin');
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
export const userIsAdminAuthSuccess = (_id, token, isAdmin) => ({
  type: actionTypes.USER_IS_ADMIN_AUTH_SUCCESS,
  payload: { _id, token, isAdmin },
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
    data.isAdmin
      ? dispatch(userIsAdminAuthSuccess(data._id, data.token, data.isAdmin))
      : dispatch(userAuthSuccess(data._id, data.token));
    localStorage.setItem('userId', JSON.stringify(data._id));
    localStorage.setItem('userToken', JSON.stringify(data.token));
    data.isAdmin &&
      localStorage.setItem('userIsAdmin', JSON.stringify(data.isAdmin));
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
export const userProfileUpdateClear = () => ({
  type: actionTypes.USER_PROFILE_UPDATE_CLEAR,
});

// userListFetch
export const userListFetchStart = () => ({
  type: actionTypes.USER_LIST_FETCH_START,
});
export const userListFetchFail = (error) => ({
  type: actionTypes.USER_LIST_FETCH_FAIL,
  payload: error,
});
export const userListFetchSuccess = (user) => ({
  type: actionTypes.USER_LIST_FETCH_SUCCESS,
  payload: user,
});
export const userListFetch = (token) => async (dispatch) => {
  dispatch(userListFetchStart());
  const url = '/api/users';
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const { data } = await axios.get(url, config);
    dispatch(userListFetchSuccess(data));
  } catch (err) {
    const isError =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(userListFetchFail(isError));
  }
};
export const userListDeletePosition = (userId) => ({
  type: actionTypes.USER_LIST_DELETE_POSITION,
  payload: userId,
});
export const userListUpdatePosition = (userId) => ({
  type: actionTypes.USER_LIST_UPDATE_POSITION,
  payload: userId,
});
export const userListClear = () => ({
  type: actionTypes.USER_LIST_CLEAR,
});

//userDelete
export const userDeleteStart = (userId) => ({
  type: actionTypes.USER_DELETE_START,
  payload: userId,
});
export const userDeleteFail = (error) => ({
  type: actionTypes.USER_DELETE_FAIL,
  payload: error,
});
export const userDeleteSuccess = (data) => ({
  type: actionTypes.USER_DELETE_SUCCESS,
  payload: data,
});
export const userDelete = (userId, token) => async (dispatch) => {
  dispatch(userDeleteStart(userId));
  const url = `/api/users/${userId}`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const { data } = await axios.delete(url, config);
    dispatch(userDeleteSuccess(data));
  } catch (err) {
    const isError =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(userDeleteFail(isError));
  }
};
export const userDeleteReset = () => ({
  type: actionTypes.USER_DELETE_RESET,
});

//userUpdateToAdmin
export const userUpdateToAdminStart = (userId) => ({
  type: actionTypes.USER_UPDATE_TO_ADMIN_START,
  payload: userId,
});
export const userUpdateToAdminFail = (error) => ({
  type: actionTypes.USER_UPDATE_TO_ADMIN_FAIL,
  payload: error,
});
export const userUpdateToAdminSuccess = (data) => ({
  type: actionTypes.USER_UPDATE_TO_ADMIN_SUCCESS,
  payload: data,
});
export const userUpdateToAdmin = (userId, token) => async (dispatch) => {
  console.log('userUpdateToAdmin - execute()');
  dispatch(userUpdateToAdminStart(userId));
  const url = `/api/users/${userId}`;
  const body = {};
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const { data } = await axios.put(url, body, config);
    dispatch(userUpdateToAdminSuccess(data));
  } catch (err) {
    const isError =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch(userUpdateToAdminFail(isError));
  }
};
export const userUpdateToAdminReset = () => ({
  type: actionTypes.USER_UPDATE_TO_ADMIN_RESET,
});
