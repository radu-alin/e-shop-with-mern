import * as actionTypes from '../actions/actionTypes';

const initialState = {
  order: null,
  isSuccess: false,
  isLoading: false,
  isError: false,
};

export const orderCreateReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ORDER_CREATE_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.ORDER_CREATE_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    case actionTypes.ORDER_CREATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        order: action.payload,
      };
    default:
      return state;
  }
};
