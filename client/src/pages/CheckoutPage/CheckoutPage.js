import { connect } from 'react-redux';

import CheckoutProducts from '../../components/Checkout/CheckoutProducts/CheckoutProducts';

import {
  cartClearProduct,
  cartAddProduct,
  cartDecreaseProduct,
} from '../../redux/actions/index';

import {
  cartProductsSelector,
  cartTotalValueSelector,
} from '../../redux/selectors/cartSelector';

import './CheckoutPage.scss';

const CheckoutPage = ({
  cartProducts,
  cartTotalValue,
  onCartClearProduct,
  onCartAddProduct,
  onCartDecreaseProduct,
}) => {
  return (
    <main id="CheckoutPage">
      <div className="checkout-page">
        <div className="checkout-page-header py-1">
          <div className="checkout-page-header-block">
            <span>
              <strong>Product</strong>
            </span>
          </div>
          <div className="checkout-page-header-block">
            <span>
              <strong>Name</strong>
            </span>
          </div>
          <div className="checkout-page-header-block">
            <span>
              <strong>Quantity</strong>
            </span>
          </div>
          <div className="checkout-page-header-block">
            <span>
              <strong>Price</strong>
            </span>
          </div>
          <div className="checkout-page-header-block">
            <span>
              <strong>Remove</strong>
            </span>
          </div>
        </div>
        {cartProducts.length ? (
          <CheckoutProducts
            cartProducts={cartProducts}
            onCartClearProduct={onCartClearProduct}
            onCartAddProduct={onCartAddProduct}
            onCartDecreaseProduct={onCartDecreaseProduct}
          />
        ) : (
          <h1 className="py-1">Please Add Products for Checkout</h1>
        )}

        <div className="checkout-page-total">
          <span>
            <strong>TOTAL: ${cartTotalValue.toFixed(2)}</strong>
          </span>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  cartProducts: cartProductsSelector(state),
  cartTotalValue: cartTotalValueSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCartClearProduct: (id) => dispatch(cartClearProduct(id)),
  onCartAddProduct: (product) => dispatch(cartAddProduct(product)),
  onCartDecreaseProduct: (product) => dispatch(cartDecreaseProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
