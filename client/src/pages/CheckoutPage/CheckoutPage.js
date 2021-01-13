import { Route, Switch, useRouteMatch } from 'react-router-dom';

import CheckoutHeader from '../../components/Checkout/CheckoutHeader/CheckoutHeader';
import CheckoutShipping from '../../components/Checkout/CheckoutShipping/CheckoutShipping';
import CheckoutPaymentMethod from '../../components/Checkout/CheckoutPaymentMethod/CheckoutPaymentMethod';
import CheckoutPlaceOrder from '../../components/Checkout/CheckoutPlaceOrder/CheckoutPlaceOrder.js';
import CheckoutPayOrder from '../../components/Checkout/CheckoutPayOrder/CheckoutPayOrder.js';

import './CheckoutPage.scss';

const CheckoutPage = () => {
  let { path } = useRouteMatch();

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
          <Switch>
            <Route exact path={`${path}`}>
              <CheckoutShipping />
            </Route>
            <Route path={`${path}/payment-method`}>
              <CheckoutPaymentMethod />
            </Route>
            <Route path={`${path}/place-order`}>
              <CheckoutPlaceOrder />
            </Route>
            <Route path={`${path}/pay-order/:id`}>
              <CheckoutPayOrder />
            </Route>
          </Switch>
          <hr></hr>
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
