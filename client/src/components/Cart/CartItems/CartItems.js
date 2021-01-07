import { useEffect } from 'react';

import {
  cartModifyQuantityForItem,
  cartClearItem,
  cartItemsDetailFetch,
} from '../../../redux/actions/index.js';

import {
  cartItemsIdSelector,
  cartItemsIdsNotChangedSelector,
  cartItemsDetailAndCartQuantitySelector,
} from '../../../redux/selectors/cartSelector.js';

import CartItem from './CartItem/CartItem';

import Spinner from '../../UI/Spinner/Spinner';
import Message from '../../UI/Message/Message';

import './CartItems.scss';
import { connect } from 'react-redux';

const CartItems = ({
  cartItemsId,
  cartItemsIdsNotChanged,
  cartItemsDetailAndCartQuantity,
  isError,
  onCartItemsDetailFetch,
  onCartClearItem,
  onCartModifyQuantityForItem,
}) => {
  useEffect(() => !cartItemsIdsNotChanged && onCartItemsDetailFetch(cartItemsId), [
    cartItemsId,
    cartItemsIdsNotChanged,
    onCartItemsDetailFetch,
  ]);

  const cartItemsRender = () =>
    cartItemsDetailAndCartQuantity.map((cartItemDetail) => (
      <CartItem
        key={cartItemDetail.productId}
        cartItemDetails={cartItemDetail}
        onCartClearItem={onCartClearItem}
        onCartModifyQuantityForItem={onCartModifyQuantityForItem}
      />
    ));

  const cartItemsView = () => {
    if (isError) {
      return <Message type={isError && 'danger'} message={isError} />;
    }
    if (cartItemsId.length === 0) {
      return (
        <h2 className="py-1">
          <strong>Please add products to cart.</strong>
        </h2>
      );
    }
    if (!cartItemsIdsNotChanged) {
      return <Spinner />;
    }
    return cartItemsRender();
  };

  return <div className="cart-items">{cartItemsView()}</div>;
};

const mapStateToProps = (state) => ({
  cartItemsId: cartItemsIdSelector(state),
  cartItemsIdsNotChanged: cartItemsIdsNotChangedSelector(state),
  cartItemsDetailAndCartQuantity: cartItemsDetailAndCartQuantitySelector(state),
  isError: state.cartItemsDetail.isError,
});

const mapDispatchToProps = (dispatch) => ({
  onCartClearItem: (itemId) => dispatch(cartClearItem(itemId)),
  onCartModifyQuantityForItem: (item, quantitySelected) =>
    dispatch(cartModifyQuantityForItem(item, quantitySelected)),
  onCartItemsDetailFetch: (cartItemsId) =>
    dispatch(cartItemsDetailFetch(cartItemsId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
