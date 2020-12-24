import { connect } from 'react-redux';

import CheckoutProducts from '../../components/Checkout/CheckoutProducts/CheckoutProducts';

import Button from '../../components/UI/Button/Button';

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
  const checkoutProductsView = cartProducts.length ? (
    <CheckoutProducts
      cartProducts={cartProducts}
      onCartClearProduct={onCartClearProduct}
      onCartAddProduct={onCartAddProduct}
      onCartDecreaseProduct={onCartDecreaseProduct}
    />
  ) : (
    <h1 className="py-1">Please Add Products for Checkout</h1>
  );
  return (
    <main id="CheckoutPage">
      <div className="checkout-page">
        <div className="checkout-page-header py-1">
          <h1>
            <strong>My cart</strong>
          </h1>
        </div>
        <div className="checkout-page-content">
          <div className="checkout-page-content-products">
            {checkoutProductsView}
          </div>
          <div className="checkout-page-content-total">
            <div className="checkout-page-content-total-sum">
              <span>
                <strong>TOTAL:</strong>
              </span>
              <span>
                <strong>${cartTotalValue.toFixed(2)}</strong>
              </span>
            </div>
            <hr></hr>
            <Button type="btn-gray-dark">Checkout</Button>
          </div>
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
