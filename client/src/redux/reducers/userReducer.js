import * as actionTypes from '../actions/actionTypes';

// userAuth
const initialStateUserAuth = {
  userId: null,
  userToken: null,
  isLoading: false,
  isError: false,
};

export const userAuthReducer = (state = initialStateUserAuth, action) => {
  switch (action.type) {
    case actionTypes.USER_AUTH_START:
      return {
        ...state,
        isError: false,
      };
    case actionTypes.USER_AUTH_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    case actionTypes.USER_AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userId: action.payload._id,
        userToken: action.payload.token,
      };
    case actionTypes.USER_IS_ADMIN_AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userId: action.payload._id,
        userToken: action.payload.token,
        userIsAdmin: action.payload.isAdmin,
      };
    case actionTypes.USER_LOGOUT:
      return {
        ...state,
        userId: null,
        userToken: null,
        userIsAdmin: null,
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
const initialStateProfileFetch = {
  name: null,
  email: null,
  isLoading: false,
  isError: false,
};
export const userProfileFetchReducer = (
  state = initialStateProfileFetch,
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
const initialStateProfileUpdate = {
  isUpdated: false,
  isLoading: false,
  isError: false,
};

export const userProfileUpdateReducer = (
  state = initialStateProfileUpdate,
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

//usersListFetch
const initialStateUsersListFetch = {
  usersList: null,
  isLoading: false,
  isError: false,
};

export const userListFetchReducer = (state = initialStateUsersListFetch, action) => {
  switch (action.type) {
    case actionTypes.USERS_LIST_FETCH_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actionTypes.USERS_LIST_FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    case actionTypes.USERS_LIST_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        usersList: action.payload,
      };
    case actionTypes.USERS_LIST_CLEAR:
      return {
        ...state,
        usersList: null,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};
