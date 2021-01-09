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
import ProductsSimpleViewRender from '../../Product/ProductsSimpleViewRender/ProductsSimpleViewRender';

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

  const cartDropdownView = () => {
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
    return <ProductsSimpleViewRender products={cartItemsDetail} />;
  };

  return (
    <section id="CartDropdownItems">
      <div className="cart-dropdown-items">{cartDropdownView()}</div>
    </section>
  );
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
