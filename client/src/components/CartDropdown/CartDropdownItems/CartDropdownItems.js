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

  const cartItemsRender = () =>
    cartItemsDetail.map((cartItemDetail) => (
      <CartDropdownItem
        key={cartItemDetail.productId}
        cartItemsDetail={cartItemDetail}
      />
    ));

  const cartDropdownView = () => {
    if (isError) {
      return <Message type={isError && 'danger'} message={isError} />;
    }
    if (cartItemsId.length === 0) {
      return <h1 className="py-1">Please Add Products to Cart</h1>;
    }
    if (!cartItemsIdsNotChanged) {
      return <Spinner />;
    }
    return cartItemsRender();
  };

  return <div className="cart-dropdown-items">{cartDropdownView()}</div>;
};

const mapStateToProps = (state) => ({
  cartItemsId: cartItemsIdSelector(state),
  cartItemsIdsNotChanged: cartItemsIdsNotChangedSelector(state),
  cartItemsDetail: cartItemsDetailAndCartQuantitySelector(state),
  isError: state.cartItemsDetail.isError,
});

const mapDispatchToProps = (dispatch) => ({
  onCartItemsDetailFetch: (cartItemsId) =>
    dispatch(cartItemsDetailFetch(cartItemsId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdownItems);
