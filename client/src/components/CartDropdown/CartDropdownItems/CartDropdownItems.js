import { useEffect } from 'react';
import { connect } from 'react-redux';

import { cartItemsDetailFetch } from '../../../redux/actions/index';

import {
  cartItemsIdSelector,
  cartItemsIdsNotChangedSelector,
  cartItemsDetailAndCartQuantitySelector,
} from '../../../redux/selectors/cartSelector';

import Spinner from '../../UI/Spinner/Spinner';
import Message from '../../UI/Message/Message';
import CartDropdownItem from './CartDropdownItem/CartDropdownItem';

import './CartDropdownItems.scss';

const CartDropdownItems = ({
  cartItemsId,
  cartItemsDetail,
  cartItemsIdsNotChanged,
  isError,
  onCartItemsDetailFetch,
}) => {
  useEffect(() => !cartItemsIdsNotChanged && onCartItemsDetailFetch(cartItemsId), [
    cartItemsId,
    cartItemsIdsNotChanged,
    onCartItemsDetailFetch,
  ]);

  const renderCartItems = () =>
    cartItemsDetail.map((cartItemDetail) => (
      <CartDropdownItem key={cartItemDetail._id} cartItemsDetail={cartItemDetail} />
    ));

  const cartDropdownItemsView = isError ? (
    <Message type={isError && 'error'} message={isError} />
  ) : !cartItemsIdsNotChanged ? (
    <Spinner />
  ) : cartItemsId[0] ? (
    <>{renderCartItems()}</>
  ) : null;

  const cartDropdownItemsHandler = !cartItemsId[0] ? (
    <h1>Please add products to Cart</h1>
  ) : (
    cartDropdownItemsView
  );

  return <div className="cart-dropdown-items">{cartDropdownItemsHandler}</div>;
};

const mapStateToProps = (state) => ({
  cartItemsId: cartItemsIdSelector(state),
  cartItemsIdsNotChanged: cartItemsIdsNotChangedSelector(state),
  cartItemsDetail: cartItemsDetailAndCartQuantitySelector(state),
  isError: state.cart.isError,
});

const mapDispatchToProps = (dispatch) => ({
  onCartItemsDetailFetch: (cartItemsId) =>
    dispatch(cartItemsDetailFetch(cartItemsId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdownItems);
