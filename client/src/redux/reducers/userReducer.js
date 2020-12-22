import * as actionTypes from '../actions/actionTypes';

const initialAuthState = {
  userId: null,
  userToken: null,
  isLoading: false,
  isError: false,
};

export const userAuthReducer = (state = initialAuthState, action) => {
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
      };
    default:
      return state;
  }
};

const initialProfileState = {
  name: null,
  email: null,
  isLoading: false,
  isError: false,
};

export const userProfileReducer = (state = initialProfileState, action) => {
  switch (action.type) {
    case actionTypes.USER_PROFILE_FETCH_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actionTypes.USER_PROFILE_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        name: action.payload.name,
        email: action.payload.email,
      };
    case actionTypes.USER_PROFILE_FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};
