import { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  cartModifyQuantityForItem,
  cartClearItem,
  cartItemsDetailFetch,
} from '../../redux/actions/index.js';

import {
  cartItemsIdSelector,
  cartItemsIdsNotChangedSelector,
  cartItemsDetailAndCartQuantitySelector,
  cartProductsTotalValueSelector,
} from '../../redux/selectors/cartSelector';

import CartItems from '../../components/Cart/CartItems/CartItems';

import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import Message from '../../components/UI/Message/Message';

import './CartPage.scss';

const CartPage = ({
  cartItemsId,
  cartItemsIdsNotChanged,
  cartItemsDetailAndCartQuantity,
  cartProductsTotalValue,
  isError,
  onCartItemsDetailFetch,
  onCartClearItem,
  onCartModifyQuantityForItem,
  history,
}) => {
  useEffect(() => !cartItemsIdsNotChanged && onCartItemsDetailFetch(cartItemsId), [
    cartItemsId,
    cartItemsIdsNotChanged,
    onCartItemsDetailFetch,
  ]);

  const cartItemsView = isError ? (
    <Message type={isError && 'danger'} message={isError} />
  ) : !cartItemsIdsNotChanged ? (
    <Spinner />
  ) : cartItemsId[0] ? (
    <CartItems
      cartItemsDetail={cartItemsDetailAndCartQuantity}
      onCartClearItem={onCartClearItem}
      onCartModifyQuantityForItem={onCartModifyQuantityForItem}
    />
  ) : null;

  const renderCartItemsHandler = !!cartItemsId ? (
    <>{cartItemsView}</>
  ) : (
    <h1 className="py-1">Please Add Products to Cart</h1>
  );

  const checkoutButtonClickHandler = () => {
    history.push('/checkout');
  };
  return (
    <main id="CartPage">
      <div className="cart-page">
        <div className="cart-page-header py-1">
          <h1>
            <strong>My cart</strong>
          </h1>
        </div>
        <div className="cart-page-content">
          <div className="cart-page-content-products">{renderCartItemsHandler}</div>
          <div className="cart-page-content-total">
            <div className="cart-page-content-total-sum">
              <span>
                <strong>TOTAL:</strong>
              </span>
              <span>
                <strong>${cartProductsTotalValue.toFixed(2)}</strong>
              </span>
            </div>
            <hr></hr>
            <Button
              type="btn-gray-dark"
              onClickAction={checkoutButtonClickHandler}
              disabled={cartProductsTotalValue === 0}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  cartItemsId: cartItemsIdSelector(state),
  cartItemsIdsNotChanged: cartItemsIdsNotChangedSelector(state),
  cartItemsDetailAndCartQuantity: cartItemsDetailAndCartQuantitySelector(state),
  cartProductsTotalValue: cartProductsTotalValueSelector(state),
  isError: state.cartItemsDetail.isError,
});

const mapDispatchToProps = (dispatch) => ({
  onCartClearItem: (itemId) => dispatch(cartClearItem(itemId)),
  onCartModifyQuantityForItem: (item, quantitySelected) =>
    dispatch(cartModifyQuantityForItem(item, quantitySelected)),
  onCartItemsDetailFetch: (cartItemsId) =>
    dispatch(cartItemsDetailFetch(cartItemsId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
