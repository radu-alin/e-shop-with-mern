import * as actionTypes from '../actions/actionTypes';
import {
  cartAddItemUtil,
  cartModifyQuantityForItemUtil,
} from '../../utils/cartUtil';

import { localStorageGetItemUtil } from '../../utils/localStorageUtil';

//cartItemsIdAndQuantity
const initialStateCartItemsIdAndQuantity = {
  cartItemsIdAndQuantity: localStorageGetItemUtil('cartItems'),
};
export const cartItemsIdAndQuantityReducer = (
  state = initialStateCartItemsIdAndQuantity,
  action
) => {
  switch (action.type) {
    case actionTypes.CART_ADD_ITEM:
      return {
        ...state,
        cartItemsIdAndQuantity: cartAddItemUtil(
          state.cartItemsIdAndQuantity,
          action.payload
        ),
      };
    case actionTypes.CART_MODIFY_QUANTITY_FOR_ITEM:
      return {
        ...state,
        cartItemsIdAndQuantity: cartModifyQuantityForItemUtil(
          state.cartItemsIdAndQuantity,
          action.payload.itemId,
          action.payload.quantitySelected
        ),
      };
    case actionTypes.CART_CLEAR_ITEM:
      return {
        ...state,
        cartItemsIdAndQuantity: [
          ...state.cartItemsIdAndQuantity.filter(
            (cartItem) => cartItem.productId !== action.payload
          ),
        ],
      };
    default:
      return state;
  }
};

//cartItemsDetailFetch
const initialStateCartItemsDetail = {
  cartItemsDetail: [],
  isLoading: false,
  isError: false,
};
export const cartItemsDetailReducer = (
  state = initialStateCartItemsDetail,
  action
) => {
  switch (action.type) {
    case actionTypes.CART_ITEMS_DETAIL_FETCH_START:
      return {
        ...state,
        isError: false,
      };
    case actionTypes.CART_ITEMS_DETAIL_FETCH_FAIL:
      return {
        ...state,
        isError: action.payload,
      };
    case actionTypes.CART_ITEMS_DETAIL_FETCH_SUCCESS:
      return {
        ...state,
        cartItemsDetail: action.payload,
      };

    default:
      return state;
  }
};

//cartDropdown
const initialStateCartDropdown = {
  isDropdownHidden: true,
};
export const cartDropdownReducer = (state = initialStateCartDropdown, action) => {
  switch (action.type) {
    case actionTypes.CART_DROPDOWN_TOGGLE_HIDDEN:
      return {
        isDropdownHidden: !state.isDropdownHidden,
      };
    default:
      return state;
  }
};

//cartCheckoutDetails
const initialStateCartCheckoutDetails = {
  shippingAddress: localStorageGetItemUtil('shippingAddress'),
  paymentMethod: localStorageGetItemUtil('paymentMethod'),
};
export const cartCheckoutDetailsReducer = (
  state = initialStateCartCheckoutDetails,
  action
) => {
  switch (action.type) {
    case actionTypes.CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case actionTypes.CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    default:
      return state;
  }
};
