import { connect } from 'react-redux';

import CheckoutProducts from '../../components/Checkout/CheckoutProducts/CheckoutProducts';

import Button from '../../components/UI/Button/Button';

import { cartTotalValueSelector } from '../../redux/selectors/cartSelector';

import './CheckoutPage.scss';

const CheckoutPage = ({ cartTotalValue }) => {
  const checkoutProductsView = cartTotalValue ? (
    <CheckoutProducts />
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
  cartTotalValue: cartTotalValueSelector(state),
});

export default connect(mapStateToProps)(CheckoutPage);
