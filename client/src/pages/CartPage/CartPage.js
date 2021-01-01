import { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  cartClearItem,
  cartModifyQuantityForItem,
  cartItemsDetailFetch,
} from '../../redux/actions/index.js';

import {
  cartItemsIdSelector,
  cartItemsDetailAndCartQuantitySelector,
  cartProductsTotalValueSelector,
} from '../../redux/selectors/cartSelector';

import CartProducts from '../../components/Cart/CartProducts/CartProducts';

import Button from '../../components/UI/Button/Button';
// import Spinner from '../../components/UI/Spinner/Spinner';

import './CartPage.scss';

const CartPage = ({
  cartItemsId,
  cartItemsDetailAndCartQuantity,
  cartProductsTotalValue,
  onCartItemsDetailFetch,
  onCartClearItem,
  onCartModifyQuantityForItem,
  history,
}) => {
  useEffect(() => onCartItemsDetailFetch(cartItemsId), [
    cartItemsId,
    onCartItemsDetailFetch,
  ]);

  const cartProductsView = cartProductsTotalValue ? (
    <CartProducts
      cartItemsDetail={cartItemsDetailAndCartQuantity}
      onCartClearItem={onCartClearItem}
      onCartModifyQuantityForItem={onCartModifyQuantityForItem}
    />
  ) : (
    <h1 className="py-1">Please Add Products for Checkout</h1>
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
          <div className="cart-page-content-products">{cartProductsView}</div>
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
  cartItemsDetailAndCartQuantity: cartItemsDetailAndCartQuantitySelector(state),
  cartProductsTotalValue: cartProductsTotalValueSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCartClearItem: (itemId) => dispatch(cartClearItem(itemId)),
  onCartModifyQuantityForItem: (item, quantity) =>
    dispatch(cartModifyQuantityForItem(item, quantity)),
  onCartItemsDetailFetch: (cartItemsId) =>
    dispatch(cartItemsDetailFetch(cartItemsId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);

// const cartItemsView = isError ? (
//   <Message type={isError && 'error'} message={isError} />
// ) : cartItemsDetail.length === 0 ? (
//   <Spinner />
// ) : (

// );
