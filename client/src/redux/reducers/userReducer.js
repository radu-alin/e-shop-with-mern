import * as actionTypes from '../actions/actionTypes';

const ininitialState = {
  userId: null,
  userToken: null,
  userName: null,
  userInfo: null,
  isLoading: false,
  isError: false,
};

export const userReducer = (state = ininitialState, action) => {
  switch (action.type) {
    case actionTypes.USER_AUTH_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actionTypes.USER_AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userId: action.payload._id,
        userToken: action.payload.token,
        userName: action.payload.name,
        userInfo: action.payload,
      };
    case actionTypes.USER_AUTH_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    case actionTypes.USER_LOGOUT:
      return {
        ...state,
        userId: null,
        userToken: null,
        userInfo: null,
        userName: null,
      };
    default:
      return state;
  }
};
