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

export const usersListFetchReducer = (
  state = initialStateUsersListFetch,
  action
) => {
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
    case actionTypes.USERS_LIST_DELETE_POSITION:
      return {
        ...state,
        usersList: state.usersList.filter((user) => user._id !== action.payload),
      };
    case actionTypes.USERS_LIST_UPDATE_POSITION:
      return {
        ...state,
        usersList: state.usersList.map((user) =>
          user._id === action.payload ? { ...user, isAdmin: true } : { ...user }
        ),
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

//userDelete
const initialStateDeleteUser = {
  userId: null,
  isLoading: false,
  isError: false,
  isSuccess: null,
};

export const userDeleteReducer = (state = initialStateDeleteUser, action) => {
  switch (action.type) {
    case actionTypes.USER_DELETE_START:
      return {
        ...state,
        isLoading: true,
        userId: action.payload,
        isError: false,
      };
    case actionTypes.USER_DELETE_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    case actionTypes.USER_DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: action.payload.message,
        userId: action.payload.userId,
      };
    case actionTypes.USER_DELETE_RESET:
      return {
        ...state,
        isLoading: false,
        userId: null,
        isSuccess: null,
        isError: false,
      };
    default:
      return state;
  }
};

//userUpdateToAdmin
const initialStateUserUpdateToAdmin = {
  userId: null,
  isLoading: false,
  isError: false,
  isSuccess: null,
};

export const userUpdateToAdminReducer = (
  state = initialStateUserUpdateToAdmin,
  action
) => {
  switch (action.type) {
    case actionTypes.USER_UPDATE_TO_ADMIN_START:
      return {
        ...state,
        isLoading: true,
        userId: action.payload,
        isError: false,
      };
    case actionTypes.USER_UPDATE_TO_ADMIN_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    case actionTypes.USER_UPDATE_TO_ADMIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: action.payload.message,
        userId: action.payload.userId,
      };
    case actionTypes.USER_UPDATE_TO_ADMIN_RESET:
      return {
        ...state,
        isLoading: false,
        userId: null,
        isSuccess: null,
        isError: false,
      };
    default:
      return state;
  }
};
