import { Route } from 'react-router-dom';

import CheckoutSteps from '../../components/Checkout/CheckoutSteps/CheckoutSteps';
import CheckoutShipping from '../../components/Checkout/CheckoutShipping/CheckoutShipping';
import CheckoutPayment from '../../components/Checkout/CheckoutPayment/CheckoutPayment';
import CheckoutOrder from '../../components/Checkout/CheckoutOrder/CheckoutOrder';

import './CheckoutPage.scss';

const CheckoutPage = () => {
  return (
    <main id="CheckoutPage">
      <div className="checkout-page">
        <div className="checkout-page-header py-1">
          <div className="checkout-page-header-title">
            <h1>
              <strong>Checkout</strong>
            </h1>
          </div>
          <div className="checkout-page-header-steps">
            <CheckoutSteps />
          </div>
        </div>
        <div className="checkout-page-content">
          <Route path="/checkout/" exact component={CheckoutShipping} />
          <Route path="/checkout/payment" component={CheckoutPayment} />
          <Route path="/checkout/place-order" component={CheckoutOrder} />
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
