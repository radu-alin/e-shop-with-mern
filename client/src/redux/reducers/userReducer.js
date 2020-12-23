import * as actionTypes from '../actions/actionTypes';

// userAuth
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
        // isLoading: true,
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
    case actionTypes.USER_RESET_ERROR:
      return {
        ...state,
        isError: false,
      };
    default:
      return state;
  }
};

// userProfileFetch
const initialProfileFetchState = {
  name: null,
  email: null,
  isLoading: false,
  isError: false,
};
export const userProfileFetchReducer = (
  state = initialProfileFetchState,
  action
) => {
  switch (action.type) {
    case actionTypes.USER_PROFILE_FETCH_START:
      return {
        ...state,
        isError: false,
      };
    case actionTypes.USER_PROFILE_FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    case actionTypes.USER_PROFILE_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        name: action.payload.name,
        email: action.payload.email,
      };
    case actionTypes.USER_PROFILE_FETCHED_CLEAR:
      return {
        ...state,
        name: null,
        email: null,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

// userProfileUpdate
const initialProfileUpdateState = {
  isUpdated: false,
  isLoading: false,
  isError: false,
};

export const userProfileUpdateReducer = (
  state = initialProfileUpdateState,
  action
) => {
  switch (action.type) {
    case actionTypes.USER_PROFILE_UPDATE_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actionTypes.USER_PROFILE_UPDATE_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    case actionTypes.USER_PROFILE_UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isUpdated: true,
      };
    case actionTypes.USER_PROFILE_UPDATE_CLEAR:
      return {
        ...state,
        isUpdated: false,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};
