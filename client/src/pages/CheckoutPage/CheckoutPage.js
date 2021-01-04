import { Route } from 'react-router-dom';

import CheckoutHeader from '../../components/Checkout/CheckoutHeader/CheckoutHeader';
import CheckoutShipping from '../../components/Checkout/CheckoutShipping/CheckoutShipping';
import CheckoutPaymentMethod from '../../components/Checkout/CheckoutPaymentMethod/CheckoutPaymentMethod';
import CheckoutPlaceOrder from '../../components/Checkout/CheckoutPlaceOrder/CheckoutPlaceOrder.js';

import './CheckoutPage.scss';

const CheckoutPage = () => {
  return (
    <main id="CheckoutPage">
      <div className="checkout-page">
        <div className="checkout-page-header">
          <div className="checkout-page-header-title">
            <h1>
              <strong>Checkout</strong>
            </h1>
          </div>
          <div className="checkout-page-header-content">
            <CheckoutHeader />
          </div>
        </div>
        <div className="checkout-page-content">
          <Route path="/checkout/" exact component={CheckoutShipping} />
          <Route path="/checkout/payment-method" component={CheckoutPaymentMethod} />
          <Route path="/checkout/place-order" component={CheckoutPlaceOrder} />
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
